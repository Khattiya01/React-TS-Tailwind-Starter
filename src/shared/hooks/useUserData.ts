import { GET_USER_API } from "../constants";
import { useSWRService } from "../services/swrService";
import { useLocalStorageData } from "./useLocalStorageData";

interface UserData {
  data: {
    id: number;
    name: string;
    email: string;
    password: string | number;
  }[];
}

type payloadUser = {
  userId?: number | string;
};
const useUserData = ({ userId }: payloadUser) => {
  const { token } = useLocalStorageData();
  const url = `${GET_USER_API}${userId ? `/${userId}` : ""}`;
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

export default useUserData;
