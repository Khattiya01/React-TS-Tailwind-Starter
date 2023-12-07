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

const useCreateUserProfile = () => {
  const { token } = useLocalStorageData();
  const url = `${POST_USER_API}`;

  const createUserProfile = async (credentials: payloadCreateUser) => {
    return await createData({ url, credentials, token });
  };
  return { createUserProfile };
};

const useUpdateUserProfile = () => {
  const { token } = useLocalStorageData();
  const url = `${PUT_USER_API}`;

  const updateUserProfile = async (credentials: payloadUpdateUser) => {
    return await updateData({ url, credentials, token });
  };
  return { updateUserProfile };
};

const useDeleteUserProfile = () => {
  const { token } = useLocalStorageData();

  const deleteUserProfile = async (credentials: payloadDeleteUser) => {
    const url = `${DELETE_USER_API}/${credentials.id}`;
    return await deleteData({ url, token });
  };
  return { deleteUserProfile };
};

export {
  userProfile,
  useCreateUserProfile,
  useUpdateUserProfile,
  useDeleteUserProfile,
};