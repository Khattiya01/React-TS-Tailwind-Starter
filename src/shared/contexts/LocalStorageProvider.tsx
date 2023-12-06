import { createContext, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

type LocalStorageContextType = {
  token: string;
  isLogin: boolean;
  setToken: any;
  setIslogin: any;
};

export const LocalStorageContext = createContext<LocalStorageContextType>({
  token: "",
  isLogin: false,
  setToken: () => null,
  setIslogin: () => null,
});

const LocalStorageProvider = ({ children }: any) => {
  const [token, setToken] = useLocalStorage<any>("token", "");

  const [isLogin, setIslogin] = useState<boolean>(false);
  const [user, setUser] = useState<any>("");

  return (
    <LocalStorageContext.Provider
      value={{ token, setToken, isLogin, setIslogin }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};
export default LocalStorageProvider;
