import "./App.css";
import LocalStorageProvider from "./shared/contexts/LocalStorageProvider";
import { RouterProvider } from "react-router-dom";
import router from "./shared/routes";
import BigSpinner from "./shared/components/BigSpinner";
import AxiosProvider from "./shared/contexts/AxiosProvider";

function App() {
  return (
    <LocalStorageProvider>
      <AxiosProvider>
        <RouterProvider router={router} fallbackElement={<BigSpinner />} />
      </AxiosProvider>
    </LocalStorageProvider>
  );
}

export default App;
