import { GET_USER_API } from "../constants/apiEndpoints";
import { ApiService } from "../services/apiService";
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
  const url = `${GET_USER_API}${userId ? `/${userId}` : ""}`;
  const { data, error, isLoading, mutate } = ApiService<UserData, string>().Get(
    { url }
  );
  return {
    userData: data,
    error,
    isLoading,
    refreshUserData: mutate,
  };
};

export default useUserData;
