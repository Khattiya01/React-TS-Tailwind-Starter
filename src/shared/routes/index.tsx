import { createBrowserRouter } from "react-router-dom";

import Root from "./root";
import LoginPage from "../../features/authentication/containers/login-page/loginPage";
import UserProfilePage from "../../features/user-profile/containers/user-profile-page/UserProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "profile",
        element: <UserProfilePage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
]);
export default router;
