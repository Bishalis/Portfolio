import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import  { useState } from "react";
import { app } from "../../../utils/firebase";

function ForgetPassword() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const auth = getAuth(app)
  const  onsubmit = (e:any) => {
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
      .then(() => {
        if(!email){
          toast.error("Email cannot be blank")
        }
        // Password reset email sent!
        // ..
        toast.success("The password rest link has been send to " + email);
        history("/signin")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        toast.error(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <form
      onSubmit={(e) => onsubmit(e)}
      className="flex justify-center items-center h-screen w-screen flex-col text-center bg-gradient-to-r from-slate-400 to-blue-500 sm:p-10"
    >
      <h1 className="font-bold text-4xl font-sans uppercase  ">
        Enter your email
      </h1>
      <div className="flex flex-col pb-10   md:w-1/2 p-10 w-full maxWidth-form_maxWidth  min-w-1/2">
        <input
          className="h-10 rounded-md w-full mb-5 p-5"
          name="email"
          placeholder="confirm your email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="font-semibold uppercase bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white  h-10"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default ForgetPassword;
