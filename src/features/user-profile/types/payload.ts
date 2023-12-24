export type payloadCreateUser = {
  firstname: string;
  lastname: string;
  accountName?: string;
  email: string;
  password: string;
};

export type payloadUpdateUser = {
  id: number;
  firstname: string;
  lastname: string;
  accountName?: string;
  email: string;
  password: string;
};

export type payloadDeleteUser = {
  id: string | number;
};
