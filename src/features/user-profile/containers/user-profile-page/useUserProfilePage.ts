import {
  GET_USER_API,
  POST_USER_API,
  PUT_USER_API,
  DELETE_USER_API,
} from "../../../../shared/constants";
import { useLocalStorageData } from "../../../../shared/hooks/useLocalStorageData";
import {
  createData,
  deleteData,
  updateData,
} from "../../../../shared/services/apiService";
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
    token
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

  const createUserProfile = async (credentials: payloadCreateUser) => {
    return await createData({ url: urlCreate, credentials, token });
  };

  const updateUserProfile = async (credentials: payloadUpdateUser) => {
    return await updateData({ url: urlUpdate, credentials, token });
  };

  const deleteUserProfile = async (credentials: payloadDeleteUser) => {
    const url = `${DELETE_USER_API}/${credentials.id}`;
    return await deleteData({ url, token });
  };

  return { createUserProfile, updateUserProfile, deleteUserProfile };
};

export { userProfile, useUserProfile };
