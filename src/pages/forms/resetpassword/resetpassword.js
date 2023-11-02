import { React, useState } from "react";
import computer from "../../../assets/computer.svg";
import "./resetpassword.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import crossicon from "../../../assets/crossicon.png";

export default function ResetPassword() {
  const [visible, setVisible] = useState(true);
  const [visiblee, setVisiblee] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className={`resetpassword ${isFormOpen ? "" : "hidden"}`}>
      <div className="reset-container bg-white p-3">
        <form>
          <img
            className="cross-icon4 d-flex"
            src={crossicon}
            onClick={closeForm}
            alt=""
          />
          <img className="resetpassword-logoimg" src={computer} alt="" />
          <p className="text-center fs-4 fw-bold">RESET PASSWORD</p>
          <hr className="hr5" />
          <div className="mb-3 position-relative">
            <input
              type={visible ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="input5"
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
              placeholder="Password"
              className="input5"
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
          <button className="resetbutton fw-semibold" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
