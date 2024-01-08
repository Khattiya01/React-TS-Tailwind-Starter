import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../../../shared/hooks/useLogin";
import { useAuth } from "../../../../shared/hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUserRole} = useAuth();
  const { login } = useLogin();

  const handleSubmitForm = async () => {
    await login({ email: email, password: password }).then((response) => {
      localStorage.setItem("token", response.data.token);
      setUserRole(response.data.data.role)
      console.log(response.data);
      navigate("/");
    });
  };

  return (
    <section className=" flex flex-col w-screen h-screen justify-center gap-3 items-center">
      <div className=" text-[42px]">Login Page</div>
      <input
        className=" w-[200px] bg-white text-black-300 border-black border"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        className=" w-[200px] bg-white text-black-300 border-black border"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <button onClick={() => handleSubmitForm()}>Login</button>
    </section>
  );
};
export default LoginPage;
