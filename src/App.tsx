import { RouterProvider } from "react-router-dom";
import router from "./shared/routes";
import BigSpinner from "./shared/components/BigSpinner";
import ModalsProvider from "./shared/contexts/ModalsProvider";
import AuthProvider from "./shared/contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <ModalsProvider>
        <RouterProvider router={router} fallbackElement={<BigSpinner />} />
      </ModalsProvider>
    </AuthProvider>
  );
}

export default App;
