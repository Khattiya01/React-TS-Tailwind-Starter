export type userProfileType = {
  data: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string | number;
  }[];
};

type responsePostType = {
  status: number;
  msg: string;
  data: any[];
};

type responsePutType = {
  status: number;
  message: string;
  data: any[];
};

type responseDeleteType = {
  status: number;
  msg: string;
  data: any[];
};

export type { responsePostType, responsePutType, responseDeleteType };
