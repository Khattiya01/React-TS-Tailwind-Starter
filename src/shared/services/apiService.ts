import { useState } from "react";
import useSWR from "swr";
import axios, { AxiosResponse } from "axios";
import { requestDataType } from "../types/requestDataType";
import { BASE_URL } from "../config";
import { TOKEN } from "../constants";
import {
  APIState,
  DeleteAPIType,
  GetAPIType,
  PostAndPutAPIType,
} from "../types/apiService";

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
});

// const ApiService = <T, CredentialsType>() => {
//   const [state, setState] = useState<APIState<T>>({
//     data: null,
//     loading: false,
//     error: null,
//     oldCredentials: null,
//   });

//   function updateData({ ...newState }) {
//     setState((prevState) => ({
//       ...prevState,
//       ...newState,
//     }));
//   }

//   const Get = ({
//     url,
//     options = { revalidateOnFocus: false, refreshInterval: 10000 },
//   }: GetAPIType) => {
//     const getData = async () => {
//       try {
//         const response: AxiosResponse<T> = await httpClient.get<T>(url);
//         return response;
//       } catch (error) {
//         console.error("Error get data:", error);
//         throw error;
//       }
//     };
//     const { data, error, mutate, isValidating } = useSWR(
//       { url },
//       getData,
//       options
//     );
//     return {
//       data: data?.data,
//       error: error,
//       isLoading: !data && !error,
//       mutate,
//       isValidating,
//     };
//   };

//   const Post = ({ url }: PostAndPutAPIType) => {
//     const postData = (
//       credentials: CredentialsType
//     ): Promise<AxiosResponse<T>> => {
//       updateData({
//         oldCredentials: credentials,
//         loading: true,
//         error: null,
//       });

//       return new Promise((resolve, reject) => {
//         httpClient
//           .post<T>(url, credentials)
//           .then((response: AxiosResponse<T>) => {
//             updateData({
//               data: response.data,
//             });
//             resolve(response);
//           })
//           .catch((error: AxiosError) => {
//             console.error("Error post data:", error);
//             updateData({
//               error: error,
//             });
//             reject(error);
//           })
//           .finally(() => {
//             updateData({
//               loading: false,
//             });
//           });
//       });
//     };

//     const mutate = async () => {
//       await postData(state.oldCredentials);
//     };

//     return { ...state, postData, mutate };
//   };

//   const Put = ({ url }: PostAndPutAPIType) => {
//     const putData = (
//       credentials: CredentialsType
//     ): Promise<AxiosResponse<T>> => {
//       updateData({
//         oldCredentials: credentials,
//         loading: true,
//         error: null,
//       });
//       return new Promise((resolve, reject) => {
//         httpClient
//           .put<T>(url, credentials)
//           .then((response: AxiosResponse<T>) => {
//             updateData({
//               data: response.data,
//             });
//             resolve(response);
//           })
//           .catch((error: AxiosError) => {
//             console.error("Error post data:", error);
//             updateData({
//               error: error,
//             });
//             reject(error);
//           })
//           .finally(() => {
//             updateData({
//               loading: false,
//             });
//           });
//       });
//     };

//     const mutate = async () => {
//       await putData(state.oldCredentials);
//     };

//     return { ...state, putData, mutate };
//   };

//   const Delete = ({ url }: DeleteAPIType) => {
//     const deleteData = (credentials: {
//       id: string | number;
//     }): Promise<AxiosResponse<T>> => {
//       updateData({
//         oldCredentials: credentials,
//         loading: true,
//         error: null,
//       });
//       return new Promise((resolve, reject) => {
//         httpClient
//           .delete<T>(
//             (url = credentials?.id ? `${url}/${credentials?.id}` : url)
//           )
//           .then((response: AxiosResponse<T>) => {
//             updateData({
//               data: response.data,
//             });
//             resolve(response);
//           })
//           .catch((error: AxiosError) => {
//             console.error("Error post data:", error);
//             updateData({
//               error: error,
//             });
//             reject(error);
//           })
//           .finally(() => {
//             updateData({
//               loading: false,
//             });
//           });
//       });
//     };

//     const mutate = async () => {
//       await deleteData(state.oldCredentials);
//     };

//     return { ...state, deleteData, mutate };
//   };

//   return {
//     Get,
//     Post,
//     Put,
//     Delete,
//   };
// };
// export { httpClient, ApiService };

const ApiService = <T, CredentialsType>() => {
  const [state, setState] = useState<APIState<T>>({
    data: null,
    loading: false,
    error: null,
    oldCredentials: null,
  });

  function updateData({ ...newState }) {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  }
  const handleRequest = async <T>(
    request: Promise<AxiosResponse<T>>,
    credentials:
      | CredentialsType
      | {
          id: string | number;
        }
  ): Promise<AxiosResponse<T>> => {
    updateData({
      oldCredentials: credentials,
      loading: true,
      error: null,
    });

    try {
      const response: AxiosResponse<T> = await request;
      updateData({
        data: response.data,
      });
      return response;
    } catch (error) {
      updateData({
        error: error,
      });
      throw error;
    } finally {
      updateData({
        loading: false,
      });
    }
  };

  const Get = ({
    url,
    options = { revalidateOnFocus: false, refreshInterval: 10000 },
  }: GetAPIType) => {
    const getData = async () => {
      try {
        const response: AxiosResponse<T> = await httpClient.get<T>(url);
        return response;
      } catch (error) {
        console.error("Error get data:", error);
        throw error;
      }
    };
    const { data, error, mutate, isValidating } = useSWR(
      { url },
      getData,
      options
    );
    return {
      data: data?.data,
      error: error,
      isLoading: !data && !error,
      mutate,
      isValidating,
    };
  };

  const Post = ({ url }: PostAndPutAPIType) => {
    const postData = (
      credentials: CredentialsType
    ): Promise<AxiosResponse<T>> => {
      return handleRequest(httpClient.post<T>(url, credentials), credentials);
    };

    const mutate = async () => {
      await postData(state.oldCredentials);
    };

    return { ...state, postData, mutate };
  };

  const Put = ({ url }: PostAndPutAPIType) => {
    const putData = (
      credentials: CredentialsType
    ): Promise<AxiosResponse<T>> => {
      return handleRequest(httpClient.put<T>(url, credentials), credentials);
    };

    const mutate = async () => {
      await putData(state.oldCredentials);
    };

    return { ...state, putData, mutate };
  };

  const Delete = ({ url }: DeleteAPIType) => {
    const deleteData = (credentials: {
      id: string | number;
    }): Promise<AxiosResponse<T>> => {
      const deleteUrl = credentials?.id ? `${url}/${credentials.id}` : url;
      return handleRequest(httpClient.delete<T>(deleteUrl), credentials);
    };

    const mutate = async () => {
      await deleteData(state.oldCredentials);
    };

    return { ...state, deleteData, mutate };
  };

  return {
    Get,
    Post,
    Put,
    Delete,
  };
};
export { httpClient, ApiService };

const createData = async ({ url, credentials }: requestDataType) => {
  try {
    const response = await httpClient.post(url, credentials);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

const updateData = async ({ url, credentials }: requestDataType) => {
  try {
    const response = await httpClient.put(url, credentials);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

const deleteData = async ({ url }: requestDataType) => {
  try {
    const response = await httpClient.delete(url);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export const httpServices = {
  createData,
  updateData,
  deleteData,
};
