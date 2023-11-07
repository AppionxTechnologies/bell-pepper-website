import "./NewAboutUs.css";
import thirdimg from "../assets/aboutus-thirdimg.jpg";
import firstimg from "../assets/aboutus-firstimg.jpg";
import secondimg from "../assets/aboutus-secondimg.jpg";
import { Link } from "react-router-dom";
import React from "react";

export default function NewAboutUs() {
  return (
    <>
      <div className="About-us-container">
        <div className="About-us-Images mb-3">
          <div>
            <Link to="/kitchen">
              <div className="About-us-Img">
                <img src={firstimg} alt="" className="about-img" />
                <h2 className="img-text">OUR STORY</h2>
              </div>
            </Link>
          </div>

          <div> 
            <Link to="/grow">
              <div className="About-us-Img">
                <img src={secondimg} alt="" className="about-img" />
                <h2 className="text-sec">GROW WITH US</h2>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/makeorder">
              <div className="About-us-Img">
                <img src={thirdimg} alt="" className="about-img" />
                <h2 className="img-text">REWARDS</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="About-us-Text">
          <p href="/catering-aboutus">
            <span className="span-text"> CATERING</span>
          </p>
          <p href="/allergen">
            <span className="span-text">ALLERGENS</span>
          </p>
        </div>
      </div>
    </>
  );
}
