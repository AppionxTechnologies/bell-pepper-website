import { React, useState } from "react";
import computer from "../../../assets/computer.svg";
import "./otp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import crossicon from "../../../assets/crossicon.png";
import ResetPassword from "../resetpassword/resetpassword";

export default function  Otp() {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };

  const [showReset, setShowReset] = useState(false);

  const openReset = () => {
    setShowReset(true);
    closeForm();
  };
  const closeReset = () => {
    setShowReset(false);
  };

  return (
    <>
    <div className={`otp ${isFormOpen ? "" : "hidden"}`}>
      <div className="otp-container bg-white p-3">
        <form>
          <img
            className="cross-icon3 d-flex"
            src={crossicon}
            onClick={closeForm}
            alt=""
          />
          <div className="div">
            <img className="otp-logoimg" src={computer} alt=""/>
          </div>
          <p className="fs-4 fw-bold">OTP VERIFICATION</p>
          <p className="fw-bold">
            OTP has sent to your registered mobile number{" "}
          </p>
          <hr className="hr4" />
          <div className="frgpwd-input mb-3">
            <input type="text" placeholder="Enter otp" className="input4" />
          </div>
            <button onClick={openReset} className="otpsubmit-btn fw-medium" type="button">
              SUBMIT
            </button>
        </form>
      </div>
    </div>
    {showReset && <ResetPassword onClose={closeReset} />}
    </>
  );
}
