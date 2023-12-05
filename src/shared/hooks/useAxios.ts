import { useContext } from "react";
import { AxiosContext } from "../contexts/AxiosProvider";

export const useAxios = () => {
  return useContext(AxiosContext);
};
