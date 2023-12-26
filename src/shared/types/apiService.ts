import { SWRConfiguration } from "swr";

type APIProps<T> = {
  url?: string;
  credentials?: T;
  options?: { revalidateOnFocus: boolean; refreshInterval: number };
};

type GetAPIType = {
  url: string;
  options?: SWRConfiguration;
};

type PostAndPutAPIType = {
  url: string;
};

type DeleteAPIType = {
  url: string;
};

type APIState<T> = {
  data: T | null;
  loading: boolean;
  error: any;
  oldCredentials: any;
};
export type {
  APIProps,
  APIState,
  GetAPIType,
  PostAndPutAPIType,
  DeleteAPIType,
};
