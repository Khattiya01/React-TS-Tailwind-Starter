import { POST_USER_LOGIN_API } from "../constants/apiEndpoints";
import { ApiService } from "../services/apiService";

type requestDataType = {
  email: string;
  password: string | number;
};

type responseDataType = {
  data: object | string;
  token: string;
};

const useAuth = () => {
  const url = `${POST_USER_LOGIN_API}`;

  const uselogin = () => {
    const { data, error, loading, mutate, postData } = ApiService<
      responseDataType,
      requestDataType
    >().Post({ url });

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
