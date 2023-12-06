import axios, { AxiosInstance } from "axios";
import { requestDataType } from "../types/requestDataType";

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

export const createData = async ({
  url,
  credentials,
  token,
}: requestDataType) => {
  try {
    const response = await apiService({ token: token }).post(url, credentials);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

export const updateData = async ({
  url,
  credentials,
  token,
}: requestDataType) => {
  try {
    const response = await apiService({ token: token }).put(url, credentials);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const deleteData = async ({ url, token }: requestDataType) => {
  try {
    const response = await apiService({ token: token }).delete(url);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
