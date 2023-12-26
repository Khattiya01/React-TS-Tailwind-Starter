import { createBrowserRouter } from "react-router-dom";

import Root from "./root";
import UserProfilePage from "../../features/user-profile/containers/user-profile-page/UserProfilePage";
import ExamplePage from "../../features/example/containers/examples/examplePage";
import AboutPage from "../../features/about/containers/about-page/aboutPage";
import LoginPage from "../../features/authentication/containers/login-page/loginPage";

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
        path: "example",
        element: <ExamplePage />,
      },
    ],
  },
  //
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);
export default router;
