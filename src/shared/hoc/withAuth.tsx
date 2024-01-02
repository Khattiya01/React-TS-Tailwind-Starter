import React, { useEffect } from "react";

type AuthProps = {
  // รับ prop จาก Component ที่ใช้ HOC
  children: React.ReactNode;
};

const withAuth = (
  WrappedComponent: React.ComponentType<any>,
  requiredRole: string
) => {
  // กำหนดชนิดของ HOC โดยใช้ React.FC
  const WithAuth = (props: AuthProps) => {
    useEffect(() => {
      // ตรวจสอบว่าผู้ใช้ลงชื่อเข้าใช้หรือไม่
      const isAuthenticated = checkAuthentication();

      // ตรวจสอบ Authorization ในกรณีที่ผู้ใช้ลงชื่อเข้าใช้
      if (isAuthenticated) {
        const userRole = getUserRole();
        if (userRole !== requiredRole) {
          console.warn(
            `Unauthorized access. User role "${userRole}" does not match required role "${requiredRole}".`
          );
          // ทำการ redirect หรือทำการจัดการอื่นๆ ที่เหมาะสม
        }
      } else {
        window.location.replace("/signin");
        console.warn("User is not authenticated.");
        // ทำการ redirect หรือทำการจัดการอื่นๆ ที่เหมาะสม
      }
    }, []);

    const checkAuthentication = () => {
      // ตรวจสอบว่าผู้ใช้ลงชื่อเข้าใช้หรือไม่
      // ตัวอย่าง: ใช้ localStorage หรือ token
      return localStorage.getItem("token") !== null;
    };

    const getUserRole = () => {
      // ดึงข้อมูลบทบาทของผู้ใช้จากที่เก็บไว้
      // ตัวอย่าง: ใช้ localStorage หรือ API call
      return localStorage.getItem("userRole") || "guest";
    };

    // ส่งต่อ props ไปยัง Component ที่ใช้ HOC
    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;