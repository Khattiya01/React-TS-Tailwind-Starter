import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type LocalStorageContextType = {
  isLogin: boolean;
  setIslogin: any;
  userData: any;
  setUserData: Dispatch<SetStateAction<any>>;
};

export const LocalStorageContext = createContext<LocalStorageContextType>({
  isLogin: false,
  setIslogin: () => null,
  userData: null,
  setUserData: () => {},
});

const LocalStorageProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIslogin] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);

  return (
    <LocalStorageContext.Provider
      value={{ isLogin, setIslogin, userData, setUserData }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};
export default LocalStorageProvider;
