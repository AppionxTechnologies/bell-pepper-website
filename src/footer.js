import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";
import Image1 from "./assets/bell pepper logo.svg";
import Image2 from "./assets/playstore and apple store icon-05.svg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTiktok,
  FaCopyright,
} from "react-icons/fa6";
import { BsArrowRightCircleFill } from "react-icons/bs";
export default function footer() {
  return (
    <>
      <div className="footer1">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-2 footer1-links text-center">
              <h5 className="footer-color">Know Us</h5>
              <div className="footer-list">
                <a href="/menu"><p className=" mt-3">Our Menu</p></a>
                <a href="/location"><p>Locations</p></a>
                <a href="/About-us"><p>About</p></a>
                <a href="/catering"><p>Catering</p></a>
              </div>
            </div>
            <div className="col-lg-2 footer1-links text-center">
              <h5 className="footer-color">Information</h5>
              <div className="footer-list">
              <a href="/kitchen"><p className=" mt-3">Our Story</p></a>
              <a href="/makeorder"><p>Rewards</p></a>
              <a href="/allergen"><p>Allergens</p></a>
              <a href="/grow"><p>Grow with us</p></a>
              </div>
            </div>
            <div className="col-lg-4 footer-links-address text-center">
              <img className="logo" src={Image1} alt="" />
              <p className="footer-address">
                Unit 3, Central Park, Coolock Village.
              </p>
              <p className="footer-address">Dublin5</p>
              <p className="footer-address">info@bellpepper.ie</p>
              <p className="footer-address">018770088</p>
              <h5 className="footer-color">Follow Us</h5>
              <div className="footer-icons">
                <a
                  href="https://www.facebook.com/bellpepperkimmage/"
                  target="_blank"
                >
                  <FaFacebook className="f-icon" />
                </a>
                <a
                  href="https://www.instagram.com/bellpepper.ie/?hl=en"
                  target="_blank"
                >
                  <FaInstagram className="f-icon" />
                </a>
                <a
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbellpepper_eire"
                  target="_blank"
                >
                  <FaTwitter className="f-icon" />
                </a>
                <a href="https://pin.it/4ZLngle" target="_blank">
                  <FaPinterest className="f-icon" />
                </a>
                <a href="https://www.tiktok.com/@bellpepper.ie" target="_blank">
                  <FaTiktok className="f-icon" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center footer-signup ">
              <h5 className="footer-color">Sign Up</h5>
              <input
                type="text "
                className="input-box py-1"
                placeholder="Your Email Here"
              />
              <BsArrowRightCircleFill />
              <div className="py-3 footer-subscribe">
                <p className="footer-para">Subscribe Our News Latter</p>
                <p className="footer-para">Get Our Lattest News & Offers</p>
              </div>
              <h6 className="footer-color py-1">Get The Bell Pepper App!</h6>
              <img className="logo-2" src={Image2} alt="" />
            </div>
            <hr className="line-color mt-2"></hr>
            <p className="text-center copy">
              <FaCopyright /> 2023 bell Pepper
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
