import React, { useEffect, useState } from "react";
import { useLocalStorageData } from "../hooks/useLocalStorageData";

type AuthProps = {
  children?: React.ReactNode;
};

const withAuthentication = (
  WrappedComponent: React.ComponentType<any>,
  requiredRole: string
) => {

  // กำหนดชนิดของ HOC
  const WithAuthentication = (props: AuthProps) => {

    const { userData } = useLocalStorageData();
    const [isloading, setIsloading] = useState<boolean>(true);

    useEffect(() => {
      // ตรวจสอบว่าผู้ใช้ลงชื่อเข้าใช้หรือยัง
      const isAuthenticated = checkAuthentication();
      const isUserDataRole = userData?.role;

      if (!isUserDataRole) return;
      // ตรวจสอบ Authorization ในกรณีที่ผู้ใช้ลงชื่อเข้าใช้
      if (isAuthenticated) {
        const userRole = getUserRole();
        if (userRole !== requiredRole) {
          console.warn(
            `Unauthorized access. User role "${userRole}" does not match required role "${requiredRole}".`
          );
          window.location.replace("/");
          // ทำการ redirect หรืออะไร อื่นๆ
        } else {
          setIsloading(false);
        }
      } else {
        window.location.replace("/signin");
        console.warn("User is not authenticated.");
        // ทำการ redirect หรืออะไร อื่นๆ
      }
    }, [userData]);

    const checkAuthentication = () => {
      // ตรวจสอบว่าผู้ใช้ลงชื่อเข้าใช้หรือยัง
      return localStorage.getItem("token") !== null;
    };

    const getUserRole = () => {
      return userData.role;
    };
    // ส่งต่อ props ไปยัง Component ที่ใช้ HOC
    return isloading ? null : <WrappedComponent {...props} />;
  };

  return WithAuthentication;
};

export default withAuthentication;