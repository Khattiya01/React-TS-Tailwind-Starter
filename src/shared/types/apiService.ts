type APIProps<T> = {
  url?: string;
  credentials?: T;
  token?: string;
  options?: { revalidateOnFocus: boolean; refreshInterval: number };
};

type GetAPIType = {
  url: string;
  token?: string;
  options?: { revalidateOnFocus: boolean; refreshInterval: number };
};

type PostAndPutAPIType = {
  url: string;
  token?: string;
};

type DeleteAPIType = {
  url: string;
  token: string;
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
