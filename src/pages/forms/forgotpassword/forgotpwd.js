import { React, useState } from "react";
import computer from "../../../assets/computer.svg";
import "./forgotpwd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import crossicon from "../../../assets/crossicon.png";
import Otp from "../otpverify/otp";

export default function ForgotPassword({onClose}) {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };

  const [showOtp, setShowOtp] = useState(false);
  const openOtp = () => {
    setShowOtp(true);
    closeForm();
    
  };
  const closeOtp = () => {
    setShowOtp(false);
   
  };


  return (
    <>
    <div className={`frgpwd ${isFormOpen ? "" : "hidden"}`}>
      <div className="frgpwd-container bg-white p-3">
        <form>
          <img
            className="cross-icon2 d-flex"
            src={crossicon}
            onClick={closeForm}
            alt=""
          />
          <div className="div">
            <img className="frgpwd-logoimg" src={computer} alt="" />
          </div>
          <p className="fs-4 fw-bold">FORGOT PASSWORD</p>
          <p className="fw-bold">Don’t worry, it happens to the best of us.</p>
          <hr className="hr3" />
          <div className="frgpwd-input mb-3">
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="input3"
            />
          </div>
            <button onClick={openOtp} className="otp-btn fw-medium" type="button">
              REQUEST OTP
            </button>
        </form>
      </div>
    </div>
    {showOtp && <Otp onClose={closeOtp} />}
    </>
  );
}
