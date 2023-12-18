
const CustomInput = ({
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return <input {...props} className={`${props.className ?? ""} input`} />;
};
export default CustomInput;
