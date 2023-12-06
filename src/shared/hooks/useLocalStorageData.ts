import { LocalStorageContext } from "../contexts/LocalStorageProvider";
import { useContext } from "react";

export const useLocalStorageData = () => {
  return useContext(LocalStorageContext);
};