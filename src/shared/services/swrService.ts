import useSWR, { SWRResponse } from "swr";
import apiService from "./apiService";
import { requestDataType } from "../types/requestDataType";

interface FetcherResponse<Data, Error> {
  data?: Data;
  error?: Error;
}

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

const useSWRService = <Data, Error>(
  url: string,
  token?: string,
  options: { revalidateOnFocus: boolean; refreshInterval: number } = {
    revalidateOnFocus: false,
    refreshInterval: 10000,
  }
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
