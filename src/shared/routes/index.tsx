import { createBrowserRouter } from "react-router-dom";

import Root from "./root";
import LoginPage from "../../features/authentication/containers/login-page/loginPage";
import UserProfilePage from "../../features/user-profile/containers/user-profile-page/UserProfilePage";
import MyipPage from "../../features/myip/containers/myip-page/MyipPage";

const router = createBrowserRouter([
  //main
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "profile",
        element: <UserProfilePage />,
      },
      {
        path: "myip",
        element: <MyipPage />,
      },
    ],
  },
  //
  {
    path: "/signin",
    element: <LoginPage />,
  },
]);
export default router;
