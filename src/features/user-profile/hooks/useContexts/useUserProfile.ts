import { useContext } from "react";
import { UserProfileContext } from "../../context/UserProfileProvider";

export const useUserProfile = () => {
  return useContext(UserProfileContext);
};
