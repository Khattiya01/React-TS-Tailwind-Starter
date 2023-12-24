export type payloadCreateUser = {
  name: string;
  email: string;
  password: string;
};

export type payloadUpdateUser = {
  id: number;
  name: string;
  email: string;
  password: string | number;
};

export type payloadDeleteUser = {
  id: string | number;
};
