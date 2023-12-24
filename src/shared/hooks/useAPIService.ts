import { useState } from "react";
import apiService from "../services/apiService";
import { AxiosError, AxiosResponse } from "axios";
import {
  APIState,
  DeleteAPIType,
  PostAndPutAPIType,
  GetAPIType,
} from "../types/apiService";
import useSWR from "swr";
import { payloadDeleteUser } from "../../features/user-profile/types/payload";

const Get = <T>({
  url,
  token,
  options = { revalidateOnFocus: false, refreshInterval: 10000 },
}: GetAPIType) => {
  const getData = async () => {
    try {
      const response: AxiosResponse<T> = await apiService.get<T>(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { data: response.data };
    } catch (error) {
      console.error("Error get data:", error);
      throw error;
    }
  };

  const { data, error, mutate } = useSWR({ url, token }, getData, options);

  return {
    data: data?.data,
    error: error,
    isLoading: !data && !error,
    mutate,
  };
};

const Post = <T, CredentialsType>({ url, token }: PostAndPutAPIType) => {
  const [state, setState] = useState<APIState<T>>({
    data: null,
    loading: false,
    error: null,
    oldCredentials: null,
  });

  const postData = (
    credentials: CredentialsType
  ): Promise<AxiosResponse<T>> => {
    setState((prevState) => ({
      ...prevState,
      oldCredentials: credentials,
      loading: true,
      error: null,
    }));

    return new Promise((resolve, reject) => {
      apiService
        .post<T>(url, credentials, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response: AxiosResponse<T>) => {
          setState((prevState) => ({
            ...prevState,
            data: response.data,
          }));
          resolve(response);
        })
        .catch((error: AxiosError) => {
          setState((prevState) => ({
            ...prevState,
            error: error,
          }));
          reject(error);
        })
        .finally(() => {
          setState((prevState) => ({
            ...prevState,
            loading: false,
          }));
        });
    });
  };

  const mutate = async () => {
    await postData(state.oldCredentials);
  };

  return { ...state, postData, mutate };
};

const Put = <T, CredentialsType>({ url, token }: PostAndPutAPIType) => {
  const [state, setState] = useState<APIState<T>>({
    data: null,
    loading: false,
    error: null,
    oldCredentials: null,
  });

  const putData = (credentials: CredentialsType): Promise<AxiosResponse<T>> => {
    setState((prevState) => ({
      ...prevState,
      oldCredentials: credentials,
      loading: true,
      error: null,
    }));

    return new Promise((resolve, reject) => {
      apiService
        .put<T>(url, credentials, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response: AxiosResponse<T>) => {
          setState((prevState) => ({
            ...prevState,
            data: response.data,
          }));
          resolve(response);
        })
        .catch((error: AxiosError) => {
          setState((prevState) => ({
            ...prevState,
            error: error,
          }));
          reject(error);
        })
        .finally(() => {
          setState((prevState) => ({
            ...prevState,
            loading: false,
          }));
        });
    });
  };

  const mutate = async () => {
    await putData(state.oldCredentials);
  };

  return { ...state, putData, mutate };
};

const Delete = <T>({ url, token }: DeleteAPIType) => {
  const [state, setState] = useState<APIState<T>>({
    data: null,
    loading: false,
    error: null,
    oldCredentials: null,
  });

  const deleteData = (
    credentials: payloadDeleteUser
  ): Promise<AxiosResponse<T>> => {
    setState((prevState) => ({
      ...prevState,
      oldCredentials: credentials,
      loading: true,
      error: null,
    }));

    return new Promise((resolve, reject) => {
      apiService
        .delete<T>((url = credentials?.id ? `${url}/${credentials?.id}` : url), {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response: AxiosResponse<T>) => {
          setState((prevState) => ({
            ...prevState,
            data: response.data,
          }));
          resolve(response);
        })
        .catch((error: AxiosError) => {
          setState((prevState) => ({
            ...prevState,
            error: error,
          }));
          reject(error);
        })
        .finally(() => {
          setState((prevState) => ({
            ...prevState,
            loading: false,
          }));
        });
    });
  };

  const mutate = async () => {
    await deleteData(state.oldCredentials);
  };

  return { ...state, deleteData, mutate };
};

export const useAPIService = {
  Post,
  Put,
  Delete,
  Get,
};
