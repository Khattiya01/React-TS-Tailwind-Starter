import useSWR, { SWRResponse } from "swr";
import apiService from "./apiService";

interface FetcherResponse<Data, Error> {
  data?: Data;
  error?: Error;
}

type requestDataType = {
  url: string;
  credentials?: any;
  token?: string;
};
const fetcher = async <Data, Error>({
  url,
  token,
}: requestDataType): Promise<FetcherResponse<Data, Error>> => {
  try {
    const response = await apiService({ token: token }).get(url);
    return { data: response.data };
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

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

const useSWRService = <Data, Error>(
  url: string,
  token?: string,
  options = {}
): SWRResponse<Data, Error> => {
  const { data, error, mutate } = useSWR<FetcherResponse<Data, Error>>(
    { url, token },
    fetcher,
    options
  );

  return {
    data: data?.data,
    error: data?.error || error,
    isLoading: !data && !error,
    mutate,
  };
};

export { useSWRService };
