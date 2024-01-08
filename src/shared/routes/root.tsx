import { Outlet, useNavigate } from "react-router-dom";
import useCheckUser from "../hooks/useCheckUser";
import { Footer, Navbar, Sidebar } from "../components/common";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const Root = () => {
  const navigate = useNavigate();
  const { userData, error, isLoading } = useCheckUser();
  const { setUserData, userRole, setUserRole } = useAuth();

  useEffect(() => {
    if (userData) {
      console.log("userData on login", userData);
      console.log("user role", userRole);
      setUserData(userData.data);
      setUserRole(userData.data.role)
    }
  }, [userData]);

  if (!localStorage.getItem("token")) {
    window.location.replace("/signin");
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    navigate("/signin");
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

export default Root;
