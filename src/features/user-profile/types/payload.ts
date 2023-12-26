export type payloadCreateUserType = {
  firstname: string;
  lastname: string;
  accountName?: string;
  email: string;
  password: string;
};

export type payloadUpdateUserType = {
  id: number;
  firstname: string;
  lastname: string;
  accountName?: string;
  email: string;
  password: string;
};

export type payloadDeleteUserType = {
  id: string | number;
};
