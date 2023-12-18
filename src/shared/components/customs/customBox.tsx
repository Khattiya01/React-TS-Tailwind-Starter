import { boxType } from "../../types/componentsTypes"

const CustomBox = ({className, children}: boxType) => {

    return (
        <div className={`${className ?? ""}`}>{children}</div>
    )
};
export default CustomBox;