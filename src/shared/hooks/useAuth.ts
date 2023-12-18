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
    return await createData({ url, credentials, token });
  };

  //formData
  const logout = async (credentials: requestDataType) => {
    return await createData({ url, credentials, token });
  };

  return { login };
};

export { useAuth };
