import { GET_USER_CHECK_API } from "../constants";
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

const useCheckUser = () => {
  const { token } = useLocalStorageData();
  const url = `${GET_USER_CHECK_API}`;

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

export default useCheckUser;
