import { useState } from "react";
import { useAuth } from "../../../../shared/hooks/useAuth";
import { useLocalStorageData } from "../../../../shared/hooks/useLocalStorageData";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setToken } = useLocalStorageData();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useAuth();

  const handleSubmitForm = async () => {
    await login({ email: email, password: password })
      .then((res) => {
        setToken(res.token);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during login:", error);
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
