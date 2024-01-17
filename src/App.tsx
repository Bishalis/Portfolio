import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/Route/SignUp.tsx";
import SignIn from "./components/Route/SignIn.tsx";
import ForgetPassword from "./components/Route/ForgetPassword.tsx";
import { Home } from "./components/Body/Home.tsx";
import Contact from "./components/Body/Contact.tsx";
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/resetpassword" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
