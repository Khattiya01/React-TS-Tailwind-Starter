import { createContext, useState } from "react";

type LocalStorageContextType = {
  isLogin: boolean;
  setIslogin: any;
};

export const LocalStorageContext = createContext<LocalStorageContextType>({
  isLogin: false,
  setIslogin: () => null,
});

const LocalStorageProvider = ({ children }: any) => {
  const [isLogin, setIslogin] = useState<boolean>(false);

  return (
    <LocalStorageContext.Provider value={{ isLogin, setIslogin }}>
      {children}
    </LocalStorageContext.Provider>
  );
};
export default LocalStorageProvider;
