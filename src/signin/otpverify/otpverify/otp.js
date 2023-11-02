import React from "react";
import computer from '../../assets/computer.png'
import "./otp.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OtpVerify() {

  return (
    <div className="forgot-password template d-flex justify-content-center align-items-center vh-100">
      <div className=" p-5 rounded c-width ">
        <form>
            <img className="computer" src={computer} alt=""/>
          <p className="text-center title">OTP VERIFICATION</p>
          <p className="content text-center">OTP has sent to your registered mobile number</p>
          <hr className="hr-line" />
          <div className="mb-3">
            <input
              type ="text"
              placeholder="Enter otp"
              className="custom-input"
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}