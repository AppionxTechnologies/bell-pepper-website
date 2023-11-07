import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import arrowmove from "../../assets/arrow.png";
import arrowsortdown from "../../assets/arrowsortdown.png";
import "./completeyourorder.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { IoLocationSharp } from "react-icons/io5";
import { DiApple } from "react-icons/di";

export default function CompleteYourOrder() {
  const firstButtons = ["TUE Aug 29", "WED Aug 30", "THU Aug 31", "FRI Sep 1"];
  const secondButtons = [
    <div>
      ASAP
      <br />
      15-20MIN
    </div>,
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
  ];
  const [currentFirstButtonIndex, setCurrentFirstButtonIndex] = useState(0);
  const [currentSecondButtonIndex, setCurrentSecondButtonIndex] = useState(0);
  const handleArrowClick = () => {
    // Increment the current button index for both sets of buttons
    setCurrentFirstButtonIndex(
      (currentFirstButtonIndex + 1) % firstButtons.length
    );
    setCurrentSecondButtonIndex(
      (currentSecondButtonIndex + 1) % secondButtons.length
    );
  };
  return (
    <div className="col-lg-12 complete-order mt-5 ">
      <div className="row ">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 ">
          <div className="mb-4">
            <h4 className="text-center fw-bold">COMPLETE YOUR ORDER</h4>
          </div>
          {/* <div className=" pickup-content  align-items-center px-3">
            <span><IoLocationSharp className="pickuplocation-icon"/><p className=" fw-semibold px-3">Pickup from coolock</p></span>
          </div> */}
          <div className="pickup-content d-flex px-3">
            <div className="py-2">
              <IoLocationSharp className="pickuplocation-icon" />
            </div>
            <div className="py-2">
              <p className="pickup-coolock fw-semibold px-3">
                Pickup from coolock
              </p>
            </div>
          </div>

          <div className="pickup-address mt-3">
            <p className="fw-semibold">Coolock</p>
            <p>North street</p>
            <p>Malahide Road</p>
            <p>Dublin</p>
          </div>
          <hr className="completeorder-hrline" />
          <p className="selectdate fw-semibold">Select Date</p>
          <div className="firstrow-buttons mb-3">
            {firstButtons.map((button, index) => (
              <button
                key={index}
                type="button"
                className={`firstbutton ${
                  currentFirstButtonIndex === index ? "hovered" : ""
                }`}
              >
                {button}
              </button>
            ))}
          </div>
          <p className="selectdate fw-semibold">Select Time</p>
          
          <div className="secondrow-buttons mb-4">
            {secondButtons.map((button, index) => (
              <button
                key={index}
                type="button"
                className={`secbutton ${
                  currentSecondButtonIndex === index ? "hovered" : ""
                }`}
              >
                {button}
              </button>
            ))}
          </div>
          <span className="arrow-container">
            <IconButton onClick={handleArrowClick}>
              <img className="arrow" src={arrowmove} alt="" />
            </IconButton>
          </span>
          
          <p className="yourorder-content fw-semibold">YOUR ORDER</p>
          
          <div className="d-flex align-items-center justify-content-between mt-2">
            <span className="fw-bold">5 items</span>
            <span className="arrowsortdown">
              <IconButton>
                <img src={arrowsortdown} alt="" />
              </IconButton>
            </span>
          </div>
          <hr className="completeorder-hrline" />
          <div className="d-flex justify-content-between px-2">
            <p>Subtotal</p>
            <p>&#8364;17.98</p>
          </div>
          <div className="d-flex justify-content-between px-2">
            <p>Tax</p>
            <p>&#8364;00.00</p>
          </div>
          <div className="d-flex justify-content-between fw-semibold px-2">
            <p>Total</p>
            <p>&#8364;17.98</p>
          </div>
          <div className="payment fw-semibold d-flex align-items-center justify-content-between mb-4 px-3">
            <p>PAYMENT METHOD</p>
            <button type="button" class="badge">
              REQUIRED
            </button>
          </div>
          <div className="mb-3">
            <button className="paybutton fw-semibold" type="button">
              PAY WITH CARD
            </button>
          </div>
          <div>
            <button type="button" className="applepay fw-semibold">
              <DiApple className="apple-icon" />
              PAY
            </button>
          </div>
          <hr className="completeorder-hrline" />
          <div className="mt-3 mb-3">
            <Link to="/success" className="link">
              <button className="pay fw-semibold" type="button">
                PLACE ORDER- &#8364;17.98
              </button>
            </Link>
          </div>
        </div>

        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}
