import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import UserProfilePage from "../../features/user-profile/containers/user-profile-page/UserProfilePage";
import LoginPage from "../../features/authentication/containers/login-page/loginPage";
import UserProfileProvider from "../../features/user-profile/context/UserProfileProvider";

const router = createBrowserRouter([
  //main
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "profile",
        element: (
          <UserProfileProvider>
            <UserProfilePage />
          </UserProfileProvider>
        ),
        errorElement: <>Error...</>,
      }
    ],
  },

  //
  {
    path: "/signin",
    element: <LoginPage />,
  },
]);
export default router;
