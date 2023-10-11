
import {React,useState} from "react";
import computer from '../../assets/computer.png'
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
        <div className="forgotpassword  d-flex justify-content-center align-items-center vh-100">
          <div className=" p-5 rounded c-width ">
            {showOtpForm ? (
              <form onSubmit={handleOtpSubmit}>
                <img className="computerr" src={computer} alt=""/>
                <p className="text-center title">OTP VERIFICATION</p>
                <p className="content text-center">OTP has been sent to your registered mobile number</p>
                <hr className="hr-line" />
                <div className="mb-3">
                  <input
                    type="text"
                    value={otp}
                    placeholder="Enter  otp"
                    onChange={handleOtpChange}
                    className="custom-input"
                  />
                </div>
                <button type="submit">SUBMIT</button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <img className="computerr" src={computer} alt=""/>
                <p className="text-center title">FORGOT PASSWORD</p>
                <p className="content text-center">Don’t worry, it happens to the best of us.</p>
                <hr className="hr-line" />
                <div className="mb-3">
                  <input
                    type="text"
                    value={mobileNumber}
                    placeholder="Enter your mobile number"
                    onChange={handleMobileNumberChange}
                    className="custom-input"
                  />
                </div>
                <button type="submit">REQUEST OTP</button>
              </form>
            )}
          </div>
        </div>
      );
    }


