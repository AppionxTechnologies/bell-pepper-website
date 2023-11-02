
import {React,useState} from "react";
import computer from '../../assets/computer.png'
import "./resetpassword.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function ResetPassword() {
  const [visible, setVisible] = useState(true);
  const [visiblee, setVisiblee] = useState(true);

  return (
    <div className="forgot-password template d-flex justify-content-center align-items-center vh-100">
      <div className=" p-5 rounded c-width ">
        <form>
            <img className="computerrr" src={computer} alt=""/>
          <p className="text-center title">RESET PASSWORD</p>
          <hr className="hr-line" />
          <div className="mb-2 position-relative">
            <input
              type={visible ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="custom-input"
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
              type={visiblee? "text" : "password"}
              id="password"
              placeholder="Password"
              className="custom-input"
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
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}



