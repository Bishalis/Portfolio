import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { app } from "../../../utils/firebase";
import { useState } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import {FaEye} from "react-icons/fa";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const auth = getAuth(app);
  const history = useNavigate();

  const onClickTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onClickToggleConfirmPassword = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (!email && !password) {
          toast.error("Fields cannot be empty");
          console.log("is blank");
          return;
        } else if (password !== confirmPassword) {
          toast.error("The password doesnot match", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          console.log("didnot match");
          return;
        }

        const user = userCredential.user;
        console.log(user);
        toast.success("User added successfully");
        history("/signin");
        // ...
      })
      .catch((error) => {
        if (!email && !password) {
          toast.warn("Fields cannot be empty");
          console.log("is blank");
        }
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error" + errorCode + errorMessage);

        // ..
      });
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col text-center bg-gradient-to-r from-fuchsia-400 to-blue-500 sm:p-10 " >
      <h1 className="font-bold text-4xl font-sans uppercase  mb-10">
        signup to{" "}
        <span className="hover:animate-blob inline-block cursor-pointer">
          connect
        </span>{" "}
        with me !!
      </h1>
      <form className="flex flex-col pb-10  shadow-form_box_shadow md:w-1/2 p-10 w-full maxWidth-form_maxWidth  min-w-1/2 " onSubmit={onSubmit} >
        <input
          className=" h-10  shadow-black	rounded-md w-full mb-5 p-5 outline-none"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div className="flex bg-white h-10  mb-5 rounded-md ">
        <input
          className="w-full mb-5 h-10 p-5 shadow-black	rounded-md  outline-none"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <FaEye
          className=" cursor-pointer focus:text-gray-500 text-xl m-auto mr-3 "
       onClick={onClickTogglePassword}
        />
        </div>
        <div className="flex bg-white h-10  mb-5 rounded-md">
          <input
            className="w-full mb-5 h-10 p-5 shadow-black	rounded-md "
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <FaEye
            className=" right-80 bottom-80 cursor-pointer focus:text-gray-500 text-xl m-auto mr-3"
            onClick={onClickToggleConfirmPassword}
          />
        </div>

        <button
          type="submit"
          className="font-semibold uppercase bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white  h-10"
        >
          Submit
        </button>
        <p className="font-bold text-xl mt-5">
          Already have account? {""}
          <NavLink
            to="/signin"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Sign In
          </NavLink>
        </p>
      </form>
    </div>
  );
};
