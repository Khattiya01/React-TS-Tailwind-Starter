import { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsProvider";

export const useModal = () => {
  return useContext(ModalsContext);
};
