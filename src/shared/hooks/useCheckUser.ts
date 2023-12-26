import { GET_USER_CHECK_API } from "../constants/apiEndpoints";
import { ApiService } from "../services/apiService";
interface UserData {
  data: {
    id: number;
    name: string;
    email: string;
    password: string | number;
  }[];
}

const useCheckUser = () => {
  const url = `${GET_USER_CHECK_API}`;

  const { data, error, isLoading, mutate } = ApiService<
    UserData,
    unknown
  >().Get({ url });
  return {
    userData: data,
    error,
    isLoading,
    refreshUserData: mutate,
  };
};

export default useCheckUser;
