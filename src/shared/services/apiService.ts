import axios from "axios";
import { requestDataType } from "../types/requestDataType";

const apiService = axios.create({
  baseURL: import.meta.env.VITE_MAIN_PATH,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiService;

const createData = async ({ url, credentials, token }: requestDataType) => {
  try {
    const response = await apiService.post(url, credentials, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

const updateData = async ({ url, credentials, token }: requestDataType) => {
  try {
    const response = await apiService.put(url, credentials, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

const deleteData = async ({ url, token }: requestDataType) => {
  try {
    const response = await apiService.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
