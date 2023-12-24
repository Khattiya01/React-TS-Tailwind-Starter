import { POST_USER_LOGIN_API } from "../constants";
import { useAPIService } from "./useAPIService";

import { useLocalStorageData } from "./useLocalStorageData";

type requestDataType = {
  email: string;
  password: string | number;
};

type responseDataType = {
  data: object | string;
  token: string;
};

const useAuth = () => {
  const { token } = useLocalStorageData();
  const url = `${POST_USER_LOGIN_API}`;

  const uselogin = () => {
    const { data, error, loading, mutate, postData } = useAPIService.Post<
      responseDataType,
      requestDataType
    >({ url, token });

    return {
      responseLogin: data,
      login: postData,
      isErrorLogin: error,
      isLoadingLogin: loading,
      refreshLogin: mutate,
    };
  };

  return { uselogin };
};

export { useAuth };
