import { React, useState } from "react";
import computer from "../../../assets/computer.jpg";
import "./forgotpwd.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ForgotPassword() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpForm, setShowOtpForm] = useState(false);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOtpForm(true);
  };
  const handleOtpSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin ">
      <div className="main-container ">
        {showOtpForm ? (
          <form>
            <div className="div">
              <img className="computer-img" src={computer} />
            </div>
            <p className="para">OTP VERIFICATION</p>
            <p className="para">
              OTP has been sent to your registered mobile number
            </p>
            <hr className="hr" />
            <div className="mb-3">
              <input
                type="text"
                value={otp}
                placeholder="Enter  otp"
                onChange={handleOtpChange}
                className="input"
              />
            </div>
            <button className="signin-btn" type="submit">
              SUBMIT
            </button>
          </form>
        ) : (
          <form>
            <div className="div">
              <img className="computer-img" src={computer} />
            </div>
            <p className="para">FORGOT PASSWORD</p>
            <p className="para">
              Don’t worry, it happens to the best of us.
            </p>
            <hr className="hr" />
            <div className="mb-3">
              <input
                type="text"
                value={mobileNumber}
                placeholder="Enter your mobile number"
                onChange={handleMobileNumberChange}
                className="input"
              />
            </div>
            <button className="signin-btn" type="submit">REQUEST OTP</button>
          </form>
        )}
      </div>
    </div>
  );
}
