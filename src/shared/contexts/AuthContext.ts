import { createContext } from 'react';

export type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;