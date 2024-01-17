import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../utils/firebase";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const auth = getAuth(app);
  const history = useNavigate();
  const onClickTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        // ..
        history("/");
      })
      .catch((error) => {

        if(!email && !password){
          toast.warn("The fields cannot be empty")
          return
        }
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
        toast.error("The email or password doesnot match");
      });
  };
  return (
    <form  onSubmit={onSubmit} className="flex justify-center items-center h-screen w-screen flex-col text-center bg-gradient-to-r from-fuchsia-400 to-blue-500 sm:p-10">
      <h1 className="font-bold text-4xl font-sans uppercase  mb-10">
        signIn to{" "}
        <span className="hover:animate-blob inline-block cursor-pointer">
          enjoy
        </span>{" "}
        the journey!!
      </h1>
      <div className="flex flex-col pb-10  shadow-form_box_shadow md:w-1/2 p-10 w-full maxWidth-form_maxWidth  min-w-1/2">
        <input
          className=" h-10  shadow-black	rounded-md w-full mb-5 p-5 outline-none"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="w-full mb-5 h-10 p-5 shadow-black	rounded-md outline-none"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <FaEye
          className="absolute right-80  cursor-pointer focus:text-gray-500 text-xl"
          style={{ bottom: "50%" }}
          onClick={onClickTogglePassword}
        />

        <button
          type="submit"
         
          className="font-semibold uppercase bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white  h-10"
        >
          Submit
        </button>
        <p className="font-bold text-xl mt-5">
          Doesn't have account? {""}
          <NavLink
            to="/signup"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Sign up
          </NavLink>
        </p>
        <p className="font-bold text-xl mt-5">
          <NavLink
            to="/resetpassword"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Forget password
          </NavLink>
        </p>
      </div>
    </form>
  );
};

export default SignIn;
