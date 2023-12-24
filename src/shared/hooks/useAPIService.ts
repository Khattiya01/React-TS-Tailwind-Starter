import { useState } from "react";
import apiService from "../services/apiService";
import { AxiosResponse } from "axios";
import { APIState, DeleteAPIType, PostAndPutAPIType, GetAPIType} from "../types/apiService";
import useSWR from "swr";

const Get = <T>({
  url,
  token,
  options = { revalidateOnFocus: false, refreshInterval: 10000 },
}: GetAPIType) => {
  const getData = async () => {
    try {
      const response: AxiosResponse<T> = await apiService({ token: token }).get(
        url
      );
      return { data: response.data };
    } catch (error) {
      console.error("Error creating data:", error);
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

const Post = <T>({ url, token }: PostAndPutAPIType) => {
  const [state, setState] = useState<APIState<T>>({
    data: null,
    loading: false,
    error: null,
    oldCredentials: null,
  });

  const postData = async (credentials: unknown) => {
    setState((prevState) => ({
      ...prevState,
      oldCredentials: credentials,
      loading: true,
      error: null,
    }));

    try {
      const response: AxiosResponse<T> = await apiService({ token }).post(
        url,
        credentials
      );
      setState((prevState) => ({
        ...prevState,
        data: response.data,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        error: error,
      }));
    } finally {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  };

  const mutate = async () => {
    await postData(state.oldCredentials);
  };

  return { ...state, postData, mutate };
};

const Put = <T>({ url, token }: PostAndPutAPIType) => {
  const [state, setState] = useState<APIState<T>>({
    data: null,
    loading: false,
    error: null,
    oldCredentials: null,
  });

  const putData = async (credentials: unknown) => {
    setState((prevState) => ({
      ...prevState,
      oldCredentials: credentials,
      loading: true,
      error: null,
    }));

    try {
      const response: AxiosResponse<T> = await apiService({ token }).put(
        url,
        credentials
      );
      setState((prevState) => ({
        ...prevState,
        data: response.data,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        error: error,
      }));
    } finally {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
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

  const deleteData = async (credentials: unknown) => {
    setState((prevState) => ({
      ...prevState,
      oldCredentials: credentials,
      loading: true,
      error: null,
    }));
    try {
      const response: AxiosResponse<T> = await apiService({ token }).delete(
        (url = credentials ? `${url}/${credentials}` : url)
      );
      setState((prevState) => ({
        ...prevState,
        data: response.data,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        error: error,
      }));
    } finally {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
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
