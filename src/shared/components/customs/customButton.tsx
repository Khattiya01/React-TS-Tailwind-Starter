import React, { ReactNode } from "react";

type CustomButtonType = {
  children: ReactNode;
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
};
const CustomButton = ({ props, children }: CustomButtonType) => {
  return (
    <button
      {...props}
      className={`  justify-center mt-10 w-full inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto ${
        props.className ?? ""
      } `}
    >
      {children}
    </button>
  );
};

export default CustomButton;