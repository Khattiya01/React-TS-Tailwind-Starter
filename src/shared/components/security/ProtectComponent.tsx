// ProtectedComponent.tsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth';

type ProtectedComponentProps = {
  allowedRoles: string[];
  children: React.ReactNode;
};

const ProtectedComponent: React.FC<ProtectedComponentProps> = ({ allowedRoles, children }) => {
  const { userRole } = useAuth();

  // เช็คว่าผู้ใช้มีสิทธิ์เข้าถึงหรือไม่
  const isAuthorized = allowedRoles.includes(userRole || '');

//   if (!isLogin) {
//     // หากไม่ได้ยืนยันตัวตนให้ทำ redirect หรือแสดงหน้า login
//     return <div>กรุณาเข้าสู่ระบบ</div>;
//   }

  if (!isAuthorized) {
    // หากไม่มีสิทธิ์ให้ทำการแสดงข้อความหรือ redirect ไปยังหน้าที่เหมาะสม
    return null;
  }

  // ถ้าผู้ใช้ยืนยันตัวตนและมีสิทธิ์ให้ render คอมโพเนนต์
  return <>{children}</>;
};

export default ProtectedComponent;
