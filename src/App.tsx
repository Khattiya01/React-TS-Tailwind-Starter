import "./App.css";
import LocalStorageProvider from "./shared/contexts/LocalStorageProvider";
import { RouterProvider } from "react-router-dom";
import router from "./shared/routes";
import BigSpinner from "./shared/components/BigSpinner";

function App() {
  return (
    <LocalStorageProvider>
        <RouterProvider router={router} fallbackElement={<BigSpinner />} />
    </LocalStorageProvider>
  );
}

export default App;
