import React, { useState } from "react";
import computer from "../assets/computer.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import { IconButton } from "@mui/material";
import {IconButton}  from '@mui/material'
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CreateProfile from "../signin/createprofile/createprofile/createprofile";
import './signin.css'
import ForgotPassword from "./forgotpassword/forgotpassword/forgotpwd";

export default function SignIn({ onForgotPasswordClick }) {
  const [password, setPassword] = useState("");
  const [visiblee, setVisiblee] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForget, setShowForget] = useState(false);


  const handleSignUpClick = (e) => {
    setShowSignUp(true);
    e.preventDefault();
  };
  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowSignUp(false);
    setShowForget(true)
  };

  return (
    <div className="signin " >
        <div className="main-container ">
      { showSignUp ? (
        <CreateProfile onClose={handleCloseSignUp} />
      ) : (

          <form>
          <div className="div">
          <img className="computer-img" src={computer}  />
          </div>
            <p className="para">SIGN IN</p>
            <p className="para">
              Don't have an account?
              <a
                href="/signup"
                onClick={handleSignUpClick}
               
              >
                Sign up
              </a>
            </p>
            <hr className="hr" />
            <div className="mb-3">
              <input
                id="email"
                placeholder="Email address"
                className="input"
              />
            </div>
            <div className="mb-1 position-relative">
                <input
                  type={visiblee ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="input"
                />
                <IconButton
                  className="eye-icon"
                  onClick={() => setVisiblee(!visiblee)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {visiblee ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
           
           {/* forgot password */}

           { showForget && <ForgotPassword/>}
           {/* forgot password */}

            <div className="forgot-password" style={{cursor:"pointer"}}>
             <p onClick={handleForgotPasswordClick}>
                Forgot password?
              </p>
            
            </div>
            <button className="signin-btn" type="submit">LOGIN</button>
          </form>
      
      )}
      </div>
    </div>
  );
}











