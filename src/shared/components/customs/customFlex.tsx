import { flexType } from "../../types/componentsTypes";

const CustomFlex = ({ className, children }: flexType) => {
  return <div className={`${className ?? ""} flex`}>{children}</div>;
};
export default CustomFlex;
