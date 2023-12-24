type APIProps = {
  url: string;
  credentials?: any;
  token?: string;
  options?: { revalidateOnFocus: boolean; refreshInterval: number };
};

type APIState<T> = {
  data: T | null;
  loading: boolean;
  error: any;
  oldCredentials: any;
};
export type { APIProps, APIState };
