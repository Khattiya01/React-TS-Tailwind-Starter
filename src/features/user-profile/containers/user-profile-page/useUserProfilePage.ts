import { GET_IPAPI_API } from "../../../../shared/constants";
import { useLocalStorageData } from "../../../../shared/hooks/useLocalStorageData";
import { useSWRService } from "../../../../shared/services/swrService";

// responseType
interface UserData {
    data: {
      id: number;
      name: string;
      email: string;
      password: string | number;
    }[];
  }

const useUserProfilePage = () => {
  const { token } = useLocalStorageData();
  const url = `${GET_IPAPI_API}`;

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
export default useUserProfilePage;
