// import { useState } from "react";
// import apiService from "../services/apiService";
// import { AxiosError, AxiosResponse } from "axios";
// import {
//   APIState,
//   DeleteAPIType,
//   PostAndPutAPIType,
//   GetAPIType,
// } from "../types/apiService";
// import useSWR from "swr";
// import { payloadDeleteUser } from "../../features/user-profile/types/payload";

// const useAPIService = <T, CredentialsType>() => {
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
//         const response: AxiosResponse<T> = await apiService.get<T>(url);
//         return response;
//       } catch (error) {
//         console.error("Error get data:", error);
//         throw error;
//       }
//     };

//     const { data, error, mutate } = useSWR({ url }, getData, options);

//     return {
//       data: data?.data,
//       error: error,
//       isLoading: !data && !error,
//       mutate,
//     };
//   };

//   const Post = ({ url }: PostAndPutAPIType) => {
//     const postData = (
//       credentials: CredentialsType
//     ): Promise<AxiosResponse<T>> => {
//       // setState((prevState) => ({
//       //   ...prevState,
//       //   oldCredentials: credentials,
//       //   loading: true,
//       //   error: null,
//       // }));

//       return new Promise((resolve, reject) => {
//         apiService
//           .post<T>(url, credentials)
//           .then((response: AxiosResponse<T>) => {
//             // setState((prevState) => ({
//             //   ...prevState,
//             //   data: response.data,
//             // }));
//             updateData({
//               data: response.data,
//             });
//             resolve(response);
//           })
//           .catch((error: AxiosError) => {
//             updateData({
//               error: error,
//             });
//             // setState((prevState) => ({
//             //   ...prevState,
//             //   error: error,
//             // }));
//             reject(error);
//           })
//           .finally(() => {
//             updateData({
//               loading: false,
//             });
//             // setState((prevState) => ({
//             //   ...prevState,
//             //   loading: false,
//             // }));
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

//       // setState((prevState) => ({
//       //   ...prevState,
//       //   oldCredentials: credentials,
//       //   loading: true,
//       //   error: null,
//       // }));

//       return new Promise((resolve, reject) => {
//         apiService
//           .put<T>(url, credentials)
//           .then((response: AxiosResponse<T>) => {
//             updateData({
//               data: response.data,
//             });
//             // setState((prevState) => ({
//             //   ...prevState,
//             //   data: response.data,
//             // }));
//             resolve(response);
//           })
//           .catch((error: AxiosError) => {
//             updateData({
//               error: error,
//             });
//             // setState((prevState) => ({
//             //   ...prevState,
//             //   error: error,
//             // }));
//             reject(error);
//           })
//           .finally(() => {
//             updateData({
//               loading: false,
//             });
//             // setState((prevState) => ({
//             //   ...prevState,
//             //   loading: false,
//             // }));
//           });
//       });
//     };

//     const mutate = async () => {
//       await putData(state.oldCredentials);
//     };

//     return { ...state, putData, mutate };
//   };

//   const Delete = ({ url }: DeleteAPIType) => {
//     // const [state, setState] = useState<APIState<T>>({
//     //   data: null,
//     //   loading: false,
//     //   error: null,
//     //   oldCredentials: null,
//     // });

//     const deleteData = (
//       credentials: payloadDeleteUser
//     ): Promise<AxiosResponse<T>> => {
//       updateData({
//         oldCredentials: credentials,
//         loading: true,
//         error: null,
//       });
//       // setState((prevState) => ({
//       //   ...prevState,
//       //   oldCredentials: credentials,
//       //   loading: true,
//       //   error: null,
//       // }));

//       return new Promise((resolve, reject) => {
//         apiService
//           .delete<T>(
//             (url = credentials?.id ? `${url}/${credentials?.id}` : url)
//           )
//           .then((response: AxiosResponse<T>) => {
//             updateData({
//               data: response.data,
//             });
//             // setState((prevState) => ({
//             //   ...prevState,
//             //   data: response.data,
//             // }));
//             resolve(response);
//           })
//           .catch((error: AxiosError) => {
//             updateData({
//               error: error,
//             });
//             // setState((prevState) => ({
//             //   ...prevState,
//             //   error: error,
//             // }));
//             reject(error);
//           })
//           .finally(() => {
//             updateData({
//               loading: false,
//             });
//             // setState((prevState) => ({
//             //   ...prevState,
//             //   loading: false,
//             // }));
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
// export default useAPIService;

