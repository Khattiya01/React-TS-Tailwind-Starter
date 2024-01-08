import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type AuthContextType = {
  userData: any;
  setUserData: Dispatch<SetStateAction<any>>;
  userRole: any;
  setUserRole: Dispatch<SetStateAction<any>>;
};

export const AuthContext = createContext<AuthContextType>({
  userData: null,
  setUserData: () => {},
  userRole: null,
  setUserRole: () => null,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<any>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
