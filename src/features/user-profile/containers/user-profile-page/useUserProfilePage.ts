import {
  GET_USER_API,
  POST_USER_API,
  PUT_USER_API,
  DELETE_USER_API,
} from "../../../../shared/constants";
import { useLocalStorageData } from "../../../../shared/hooks/useLocalStorageData";
import { TodoService } from "../../../../shared/services/apiService";

import { useSWRService } from "../../../../shared/services/swrService";
import {
  payloadCreateUser,
  payloadDeleteUser,
  payloadUpdateUser,
} from "../../types/payload";

// responseType
interface UserData {
  data: {
    id: number;
    name: string;
    email: string;
    password: string | number;
  }[];
}

const userProfile = () => {
  const { token } = useLocalStorageData();
  const url = `${GET_USER_API}`;

  const { data, error, isLoading, mutate } = useSWRService<UserData, string>(
    url,
    token,
    {
      revalidateOnFocus: false,
      refreshInterval: 10000,
    }
  );

  return {
    userData: data,
    error,
    isLoading,
    refreshUserData: mutate,
  };
};

const useUserProfile = () => {
  const { token } = useLocalStorageData();
  const urlCreate = `${POST_USER_API}`;
  const urlUpdate = `${PUT_USER_API}`;
  const urlDelete = `${DELETE_USER_API}`;

  const createUserProfile = async (credentials: payloadCreateUser) => {
    return await TodoService.createData({ url: urlCreate, credentials, token });
  };

  const updateUserProfile = async (credentials: payloadUpdateUser) => {
    return await TodoService.updateData({ url: urlUpdate, credentials, token });
  };

  const deleteUserProfile = async (credentials: payloadDeleteUser) => {
    const url = `${urlDelete}/${credentials.id}`;
    return await TodoService.deleteData({ url, token });
  };

  return { createUserProfile, updateUserProfile, deleteUserProfile };
};

export { userProfile, useUserProfile };
