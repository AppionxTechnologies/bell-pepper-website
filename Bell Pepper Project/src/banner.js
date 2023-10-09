import React from "react";
import Image1 from "./assets/quality food icon.svg";
import Image2 from "./assets/super taste.svg";
import Image3 from "./assets/fast delivery.svg";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Banner() {
  return (
   
      <div className="container-fluid">   
            <div className="boxs">
              <img className="icon-1" src={Image1} alt="Quality Food" />
              <p>Quality Food</p>
            </div>
            <div className="boxs">
              <img className="icon-1" src={Image2} alt="Super Taste" />
              <p>Super Taste</p>
            </div>
            <div className="boxs">
              <img className="icon-1" src={Image3} alt="Fast Delivery" />
              <p>Fast Delivery</p>
            </div>
        </div>
 

  );
}
