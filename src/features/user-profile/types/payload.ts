export type payloadCreateUser = {
  name: string;
  email: string;
  password: string;
};

export type payloadUpdateUser = {
  id: string | number;
  name: string;
  email: string;
  password: string;
};

export type payloadDeleteUser = {
  id: string | number;
};
