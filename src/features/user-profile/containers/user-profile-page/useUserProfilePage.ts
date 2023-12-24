import {
  GET_USER_API,
  POST_USER_API,
  PUT_USER_API,
  DELETE_USER_API,
} from "../../../../shared/constants";
import { useAPIService } from "../../../../shared/hooks/useAPIService";
import { useLocalStorageData } from "../../../../shared/hooks/useLocalStorageData";
import {
  payloadCreateUser,
  payloadUpdateUser,
} from "../../types/payload";
import {
  responseDeleteType,
  responsePostType,
  responsePutType,
  userProfileType,
} from "../../types/response";

const useUserProfilePage = () => {
  const { token } = useLocalStorageData();
  const urlRead = `${GET_USER_API}`;
  const urlCreate = `${POST_USER_API}`;
  const urlUpdate = `${PUT_USER_API}`;
  const urlDelete = `${DELETE_USER_API}`;

  const UserProfile = ({ page, limit }: { page: string; limit: string }) => {
    const { data, error, isLoading, mutate } =
      useAPIService.Get<userProfileType>({
        url: urlRead + `?page${page}` + `&limit${limit}`,
        token,
        options: { revalidateOnFocus: true, refreshInterval: 10000 },
      });

    return {
      userData: data,
      error,
      isLoading,
      refreshUserData: mutate,
    };
  };

  const CreateUserProfile = () => {
    const { data, error, loading, mutate, postData } = useAPIService.Post<
      responsePostType,
      payloadCreateUser
    >({ url: urlCreate, token });

    return {
      responsePostUserProfile: data,
      postUserProfile: postData,
      isErrorPost: error,
      isLoadingPost: loading,
      refreshPost: mutate,
    };
  };

  const UpdateUserProfile = () => {
    const { data, error, loading, mutate, putData } = useAPIService.Put<
      responsePutType,
      payloadUpdateUser
    >({ url: urlUpdate, token });

    return {
      responsePutUserProfile: data,
      putUserProfile: putData,
      isErrorPut: error,
      isLoadingPut: loading,
      refreshPut: mutate,
    };
  };

  const DeleteUserProfile = () => {
    const { data, error, loading, mutate, deleteData } = useAPIService.Delete<
      responseDeleteType
    >({ url: urlDelete, token });

    return {
      responseDeleteUserProfile: data,
      deleteUserProfile: deleteData,
      isErrorDelete: error,
      isLoadingDelete: loading,
      refreshDelete: mutate,
    };
  };

  return {
    UserProfile,
    CreateUserProfile,
    UpdateUserProfile,
    DeleteUserProfile,
  };
};

export { useUserProfilePage };
