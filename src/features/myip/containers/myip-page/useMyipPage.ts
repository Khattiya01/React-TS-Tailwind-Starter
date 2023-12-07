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

const useMyipPage = () => {
  const { token } = useLocalStorageData();
  const url = `/posts`;

  const { data, error, isLoading, mutate } = useSWRService<UserData, string>(
    url,
    token
  );

  const myip = {
    userData: data,
    error,
    isLoading,
    refreshUserData: mutate,
  };

  return { myip };
};
export default useMyipPage;
