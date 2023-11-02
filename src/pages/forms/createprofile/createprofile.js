import { React, useState } from "react";
import computer from "../../../assets/computer.svg";
import "./createprofile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import crossicon from "../../../assets/crossicon.png";
export default function CreateProfile({ onClose }) {
  const [visible, setVisible] = useState(true);
  const [visiblee, setVisiblee] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className={`signup ${isFormOpen ? "" : "hidden"}`}>
      <div className="user-profile bg-white p-3">
        <form action="">
          <img
            className="cross-icon1 d-flex"
            src={crossicon}
            onClick={closeForm}
            alt=""
          />
          <div className="div">
            <img className="signup-logoimg" src={computer} alt="" />
          </div>

          <p className="fs-4 fw-bold">CREATE YOUR PROFILE</p>
          <p className="fw-semibold account">
            Already have an account?
            <a className="account" onClick={onClose}>Sign in </a>
          </p>

          <hr className="hr2" />
          <div className="mb-3">
            <input
              id="email"
              placeholder="Email address *"
              className="input2"
              name="email"
            />
          </div>
          <div className="mb-3">
            <input
              id="email"
              placeholder="First name *"
              className="input2"
              name="firstname"
            />
          </div>
          <div className="mb-3">
            <input
              id="email"
              placeholder="Last name *"
              className="input2"
              name="lastname"
            />
          </div>
          <div className="mb-3">
            <input
              id="email"
              placeholder="Phone number (XXX) XXX-XXX *"
              className="input2"
              name="phonenumber"
            />
          </div>
          <div className="mb-3 position-relative">
            <input
              type={visible ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="input2"
              name="password"
            />
            <IconButton
              className="eye-icon"
              onClick={() => setVisible(!visible)}
              style={{
                position: "absolute",
                right: "45px",
                top: "55%",
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
              placeholder="Confirm Password"
              className="input2"
              name="password"
            />
            <IconButton
              className="eye-icon"
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
          </div>
          <button className="Login-btn fw-semibold" type="submit">
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
}
