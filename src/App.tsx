import LocalStorageProvider from "./shared/contexts/LocalStorageProvider";
import { RouterProvider } from "react-router-dom";
import router from "./shared/routes";
import BigSpinner from "./shared/components/BigSpinner";
import ModalsProvider from "./shared/contexts/ModalsProvider";

function App() {
  return (
    <LocalStorageProvider>
      <ModalsProvider>
        <RouterProvider router={router} fallbackElement={<BigSpinner />} />
      </ModalsProvider>
    </LocalStorageProvider>
  );
}

export default App;
