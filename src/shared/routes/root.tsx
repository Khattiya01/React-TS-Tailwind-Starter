import { Outlet, useNavigate } from "react-router-dom";
import useCheckUser from "../hooks/useCheckUser";
import { Footer, Navbar, Sidebar } from "../components/common";
import { useEffect } from "react";
import { useLocalStorageData } from "../hooks/useLocalStorageData";
import withAuthorization from "../hoc/withAuthorization";

const Root = () => {
  const navigate = useNavigate();
  const { userData, error, isLoading } = useCheckUser();
  const { setUserData } = useLocalStorageData();

  useEffect(() => {
    if (userData) {
      console.log("userData on login", userData)
      setUserData(userData.data);
    }
  }, [userData]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    navigate("/signin");
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Navbar />
      <div className=" flex">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withAuthorization(Root);