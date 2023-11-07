/////////////////// js grow 

import React from "react";
// import './Grow.css';
import "./makeorder.css";
import food from "../../assets/Grow with us-15.png";
import rewards from "../../assets/rewards-banner.png";
import foodimg from "../../assets/EARN.svg";
import foodimg1 from "../../assets/QUICK REORDERING-06.svg";
import foodimg2 from "../../assets/PERSONALIZED RECOMMENDATIONS-06.svg";
import Image2 from "../../assets/playstore and apple store icon-05.svg";


const Makeorder = () => {
  return (
    <>
      <div className="Make_Order">
        <div className="order-left">
          <div className="order-h ">
            <h1 className="fw-bold">MAKE ORDER</h1>
            <h1 className="fw-bold">MORE EXCITING</h1>
            <h1 className="fw-bold"> THAN EVER </h1>  
          </div>

          <div className="order-para">
            <p className="fw-medium">
              Join Bell Pepper rewards and get the most out of your next meal as
              you earn progress on every order, check out menu recommendations
              tailored to your tastes, and discover delicious members-only
              surprises.
            </p>
          </div>

          <button className="order-btn">JOIN BELL PEPPER REWARDS NOW</button>
        </div>
        <div className="order-right">
          <div className="food-img">
            <img src={food} alt="" />
          </div>
        </div>
      </div>

      {/* center */}

      <div className="Make_order_center">
        <div className="center-h">
          <h1 className="fw-bold">How rewards work</h1>
        </div>
        <div className="center-para">
          <p className="fw-medium">
            {" "}
            Once you’ve registered, you’ll earn 30-point sign-up bonus and start
            receiving 1 point for every euro you spend with us. Every 100 points
            earns you an automatic €7 food & beverage credit that you can spend
            on whatever your heart desires.
          </p>
        </div>

        <div className="center-img">
          {/* <img src={} alt="" /> */}
          <div className="center-images">
            <img src={rewards} alt="" />
          </div>
        </div>
      </div>

      {/* center */}

      {/* footer */}
      <div className="Make_order_footer">
        <h4 className="h4">EXCLUSIVE</h4>
        <h2 className="h2 fw-bold">MEMBERS-ONLY PERKS</h2>

        <div className="footer-boxs">
          <div className="footer-container">
            <div className="footer-img">
              <img src={foodimg} alt="" />
            </div>
            <span>
              EARN €7 FOR EVERY <br /> €99 SPENT
            </span>
          </div>

          <div className="footer-container">
            <div className="footer-img">
              <img src={foodimg1} alt="" />
            </div>
            <span>
              PERSONALIZED
              <br />
              RECOMMENDATIONS{" "}
            </span>
          </div>
          <div className="footer-container">
            <div className="footer-img">
              <img src={foodimg2} alt="" />
            </div>
            <span>QUICK REORDERING</span>
          </div>
        </div>
      </div>
      {/* footer */}



      {/* appstore-footer */}
      <div className="App_store_footer">
        <h1 className="fw-bold">DOWNLOAD THE NEW BELL PEPPER APP</h1>
        <div className="store-para">
          <p className="fw-medium">
            Make ordering online & earning rewards extra easy. The Bell Pepper
            app for iOS and Android is the #1 most convenient way to get fresh,
            craveable, feel-good food on demand. Download the app and order
            ahead for pickup or delivery
          </p>
        </div>

        <div className="Store-images">
         <img className="apple-playstore" src={Image2} alt="" />
        </div>


        <div className="store-footer">
            <h3 className="st-h3">QUESTIONS?</h3>
            <p className="st-para">Learn more about Bell Pepper Rewards by visiting our <a href="">FAQs</a> and reading through <a href="">our</a> terms</p>
        </div>
      </div>
      {/* appstore-footer */}
    </>
  );
};

export default Makeorder;