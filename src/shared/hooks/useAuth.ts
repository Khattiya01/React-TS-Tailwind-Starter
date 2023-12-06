import { POST_USER_LOGIN_API } from "../constants";
import { createData } from "../services/apiService";
import { useLocalStorageData } from "./useLocalStorageData";

type requestDataType = {
  email: string;
  password: string | number;
};

const useAuth = () => {
  const { token } = useLocalStorageData();
  const url = `${POST_USER_LOGIN_API}`;

  const login = async (credentials: requestDataType) => {
    const response = await createData({ url, credentials, token });
    return response;
  };

  //formData
  const logout = async (credentials: requestDataType) => {
    const response = await createData({ url, credentials, token });
    return response;
  };

  return { login };
};

export { useAuth };
