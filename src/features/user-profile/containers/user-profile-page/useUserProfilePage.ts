import {
  GET_USER_API,
  POST_USER_API,
  PUT_USER_API,
  DELETE_USER_API,
} from "../../../../shared/constants/apiEndpoints";
import { ApiService } from "../../../../shared/services/apiService";
import {
  payloadCreateUserType,
  payloadUpdateUserType,
} from "../../types/payload";
import {
  responseDeleteType,
  responsePostType,
  responsePutType,
  userProfileType,
} from "../../types/response";

const useGetUserProfile = ({
  page,
  limit,
}: {
  page: string;
  limit: string;
}) => {
  const { data, error, isLoading, mutate, isValidating } = ApiService<
    userProfileType,
    unknown
  >().Get({
    url: GET_USER_API + `?page${page}` + `&limit${limit}`,
    options: { revalidateOnFocus: false, refreshInterval: 10000 },
  });

  return {
    responseGetUserProfile: data,
    error,
    isLoading,
    refreshUserData: mutate,
    isValidating,
  };
};

const useCreateUserProfile = () => {
  const urlCreate = `${POST_USER_API}`;
  const { data, error, loading, mutate, postData } = ApiService<
    responsePostType,
    payloadCreateUserType
  >().Post({
    url: urlCreate,
  });

  return {
    responsePostUserProfile: data,
    postUserProfile: postData,
    isErrorPost: error,
    isLoadingPost: loading,
    refreshPost: mutate,
  };
};

const useUpdateUserProfile = () => {
  const urlUpdate = `${PUT_USER_API}`;
  const { data, error, loading, mutate, putData } = ApiService<
    responsePutType,
    payloadUpdateUserType
  >().Put({
    url: urlUpdate,
  });

  return {
    responsePutUserProfile: data,
    putUserProfile: putData,
    isErrorPut: error,
    isLoadingPut: loading,
    refreshPut: mutate,
  };
};

const useDeleteUserProfile = () => {
  const urlDelete = `${DELETE_USER_API}`;
  const { data, error, loading, mutate, deleteData } = ApiService<
    responseDeleteType,
    unknown
  >().Delete({
    url: urlDelete,
  });

  return {
    responseDeleteUserProfile: data,
    deleteUserProfile: deleteData,
    isErrorDelete: error,
    isLoadingDelete: loading,
    refreshDelete: mutate,
  };
};

export {
  useGetUserProfile,
  useCreateUserProfile,
  useUpdateUserProfile,
  useDeleteUserProfile,
};
