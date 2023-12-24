import axios, { AxiosInstance } from "axios";

import { requestDataType } from "../types/requestDataType";

type ApiServiceProps = {
  token?: string;
}

const apiService = ({ token }: ApiServiceProps) => {
  const axiosCreate: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_MAIN_PATH,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${token ?? ""}`,
      "Content-Type": "application/json",
    },
  });
  return axiosCreate;
};

export default apiService;

const createData = async ({ url, credentials, token }: requestDataType) => {
  try {
    const response = await apiService({ token: token }).post(url, credentials);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

const updateData = async ({ url, credentials, token }: requestDataType) => {
  try {
    const response = await apiService({ token: token }).put(url, credentials);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

const deleteData = async ({ url, token }: requestDataType) => {
  try {
    const response = await apiService({ token: token }).delete(url);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export const httpServices = {
  createData,
  updateData,
  deleteData,
};

