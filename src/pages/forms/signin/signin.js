import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import computer from "../../../assets/computer.svg"
import "./signin.css";
import Validation from './signinvalidation'
import "bootstrap/dist/css/bootstrap.min.css"
import crossicon from "../../../assets/crossicon.png";
import CreateProfile from "../createprofile/createprofile";
import ForgotPassword from "../forgotpassword/forgotpwd";



export default function SignIn({onClose}) {
  const [visiblee, setVisiblee] = useState(true);
  const [values, setValues] = useState({
    email:" ",
    password :""
  })
  const [errors, setErrors] = useState({})
  const handleInput =(event) =>{
    setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
  }
  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };

  const [showSignup, setShowSignup] = useState(false);

  const openSignup = () => {
    setShowSignup(true);
    setShowSignIn(false);
  };
  const closeSignup = () => {
    setShowSignup(false);
    setShowSignIn(true);
  };

  const [showForgot, setShowForgot] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);

  const openForgot = () => {
    setShowSignIn(false);
    setShowForgot(true);
  };
  const closeForgot = () => {
    setShowSignIn(true);
    setShowForgot(false);
  };

  return (
    <>
    {showSignIn && (
    <div className={`signin ${isFormOpen ? "" : "hidden"}`}>
      <div className="signin-container bg-white p-3 ">
          <form action="" onSubmit={handleSubmit}>
            <img className="cross-icon d-flex" src={crossicon} alt="" onClick={closeForm} />
            <div className="div">
              <img className="signin-logoimg" src={computer} alt="" />
            </div>
            <p className="fs-4 fw-bold">SIGN IN</p>
            <p className="para1 fw-bold">
              Don't have an account?
                <a  onClick={openSignup} className="fw-semibold">Sign up</a>
            </p>
            <hr className="hr1" />
            <div className="mb-3">
              <input id="email" onChange={handleInput} name="email" placeholder="Email address" className="input1" />
              {errors.email && <span className="text-danger fw-medium">{errors.email}</span>}
            </div>
            <div className="mb-1 position-relative">
              <input
                type={visiblee ? "text" : "password"}
                onChange={handleInput}
                name="password"
                id="password"
                placeholder="Password"
                className="input1"
              />
              <IconButton
                className="eye-icon1"
                onClick={() => setVisiblee(!visiblee)}
                style={{
                  position: "absolute",
                  right: "45px",
                  top: "55%",
                  transform: "translateY(-50%)",
                }}
              >
                {visiblee ? <Visibility /> : <VisibilityOff />}
              </IconButton>
              {errors.password && <span className="text-danger fw-medium">{errors.password}</span>}
            </div>
              
            <div className="forgot-password" style={{ cursor: "pointer" }}>
                <p onClick={openForgot} className="fw-semibold">Forgot password?</p>
            </div>
            <button className="signin-btn fw-medium" type="button">
              LOGIN
            </button>
          </form>
      </div>
    </div>
    )}
    {showSignup && <CreateProfile onClose={closeSignup} />}
    {showForgot && <ForgotPassword onClose={closeForgot} />}
    </>
  );
}



