import { React, useState } from "react";
import computer from '../../../assets/computer.jpg'
import "./createprofile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SignIn from "../../signin";

export default function CreateProfile() {
  const [visible, setVisible] = useState(true);
  const [visiblee, setVisiblee] = useState(true);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = (e) => {
    setShowSignIn(true);
    e.preventDefault();
  };

  const handleCloseSignIn = () => {
    setShowSignIn(false);
  };

  return (
    <div className="signUp ">
        <div className="user-profile ">
        {showSignIn ? (
          <SignIn onClose={handleCloseSignIn} />
        ) : (
          <div className=" p-6 rounded c-width ">
            <form>
            <div className="div">
              <img className="computer-img" src={computer}  />
          </div>

          <p className="para">CREATE YOUR PROFILE</p>
            <p className="para">Already have an account?
            
            <a onClick={handleSignInClick}   href="/signup">Sign in </a></p>
           
             
              <hr className="hr" />
            <div className="mb-2">
              <input
                id="email"
                placeholder="Email address"
                className="input"
              />
            </div>
            <div className="mb-2">
              <input
                id="email"
                placeholder="Email address"
                className="input"
              />
            </div>
            <div className="mb-2">
              <input
                id="email"
                placeholder="Email address"
                className="input"
              />
            </div>
            <div className="mb-2">
              <input
                id="email"
                placeholder="Email address"
                className="input"
              />
            </div>
              <div className="mb-2 position-relative">
                <input
                  type={visible ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="input"
                />
                <IconButton
                  className="eye-icon"
                  onClick={() => setVisible(!visible)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {visible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
              <div className="mb-2 position-relative">
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
              <button className="signin-btn" type="submit">LOGIN</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
