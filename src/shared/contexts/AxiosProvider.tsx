import { createContext } from "react";
import { useLocalStorageData } from "../hooks/useLocalStorageData";
import axios, { AxiosInstance } from "axios";

type AxiosProviderType = {
  apiService: AxiosInstance;
};

export const AxiosContext = createContext<AxiosProviderType>({
  apiService: axios,
});

const AxiosProvider = ({ children }: any) => {
  const { token } = useLocalStorageData();

  const apiService: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_MAIN_PATH, // ตั้งค่า baseURL ของ API ของคุณ
    timeout: 5000, // ตั้งค่า timeout สำหรับ request ทั้งหมดเป็น 5 วินาที
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return (
    <AxiosContext.Provider value={{ apiService }}>
      {children}
    </AxiosContext.Provider>
  );
};
export default AxiosProvider;
