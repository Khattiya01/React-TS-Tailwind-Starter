import { Outlet, useNavigate } from "react-router-dom";
import useCheckUser from "../hooks/useCheckUser";
import { Footer, Navbar, Sidebar } from "../components/common";

const Root = () => {
  const navigate = useNavigate();
  // const { userData, error, isLoading } = useCheckUser();

  // console.log(userData);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   // navigate("/signin");
  //   return <p>Error: {error}</p>;
  // }

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
