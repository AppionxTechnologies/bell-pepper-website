import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pickuplocation from "../../assets/pickup location-06.svg";
import arroww from "../../assets/arrow.png";
import arrowsortdown from "../../assets/arrowsortdown.png";
// import applepay from '../../assets/applepay.png';
import "./completeyourorder.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

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
    <div className="completeorder position-relative d-flex justify-content-center align-items-center">
      <div className="main-container text-center">
        <form>
          <p className="heading">COMPLETE YOUR ORDER</p>
          <div className="pickupfromcoolock d-flex align-items-center">
            <img className="locationicon" src={pickuplocation} alt="" />
            <p>Pickup from Coolock</p>
          </div>
          <div className="row mt-3">
            <div className="col-12 coolock">
              <div className="d-flex px-3 flex-row align-items-start justify-content-between">
                <span className="fw-bold">Coolock</span>
              </div>
              <div className="d-flex px-3 flex-row align-items-start justify-content-between">
                <span>north street</span>
              </div>
              <div className="d-flex px-3 flex-row align-items-start justify-content-between">
                <span>erode</span>
              </div>
              <div className="d-flex px-3 flex-row align-items-start justify-content-between">
                <span>tamil nadu</span>
              </div>
            </div>
          </div>
          <hr className="hr" />
          <div className="row mt-3">
            <div className="col-12">
              <div className="d-flex px-3 flex-row align-items-start justify-content-between">
                <span className="fw-bold">Select Date</span>
              </div>
            </div>
          </div>
          <div className="first-buttons">
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
          <div className="row mt-3">
            <div className="col-12">
              <div className="d-flex px-3 flex-row align-items-start justify-content-between">
                <span className="fw-bold">Select Time</span>
              </div>
            </div>
          </div>
          <div className="sec-buttons">
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
              <img className="arrow" src={arroww} alt="" />
            </IconButton>
          </span>
          <div className="yourorder d-flex align-items-center">
            <p>YOUR ORDER</p>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="px-3 py-1 mt-3 d-flex flex-row align-items-start justify-content-between">
                <span className="fw-bold mt-2">5 items</span>
                <span className="arrowsortdown">
                  <IconButton><img src={arrowsortdown} alt="" /></IconButton>
                </span>
              </div>
            </div>
          </div>
          <hr className="hr" />
          <div className="row subtotal">
            <div className="col-12">
              <div className="px-3 py-1 d-flex flex-row align-items-start justify-content-between">
                <span>Subtotal</span>
                <span>&#8364;17.98</span>
              </div>
              <div className="px-3 py-1 d-flex flex-row align-items-start justify-content-between">
                <span>Tax</span>
                <span>&#8364;00.00</span>
              </div>
              <div className="px-3 py-1 d-flex flex-row align-items-start justify-content-between">
                <span className="fw-bold">Total</span>
                <span className="fw-bold">&#8364;17.98</span>
              </div>
            </div>
          </div>
          <div className="payment d-flex align-items-center justify-content-between">
            <p>PAYMENT METHOD</p>
            <button type="button" class="badge">
              REQUIRED
            </button>
          </div>
          <button className="paybutton" type="button">
            PAY WITH CARD
          </button>
          <button type="button" className="applepay">PAY
            {/* <img src={applepay} alt=""/> */}
          </button>
          <hr className="hr" />
          <Link to="/success" className="link">
            <button className="pay" type="button">
              PLACE ORDER- &#8364;17.98
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

