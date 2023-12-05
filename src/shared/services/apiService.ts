// src/shared/services/apiService.ts
import axios, { AxiosInstance } from "axios";
// const apiService: AxiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_MAIN_PATH, // ตั้งค่า baseURL ของ API ของคุณ
//   timeout: 5000, // ตั้งค่า timeout สำหรับ request ทั้งหมดเป็น 5 วินาที
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

const apiService = ({ token }: { token?: string }) => {
  const axiosCreate: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_MAIN_PATH, // ตั้งค่า baseURL ของ API ของคุณ
    timeout: 5000, // ตั้งค่า timeout สำหรับ request ทั้งหมดเป็น 5 วินาที
    headers: {
      Authorization: `Bearer ${token ?? ""}`,
      "Content-Type": "application/json",
    },
  });
  return axiosCreate;
};

export default apiService;
