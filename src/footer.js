import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";
import Image1 from "./assets/bell pepper logo.svg";
import Image2 from "./assets/playstore and apple store icon-05.svg";
import { FaFacebook,FaInstagram ,FaTwitter,FaPinterest,FaTiktok,FaCopyright} from "react-icons/fa6";
import { BsArrowRightCircleFill} from "react-icons/bs";

export default function footer() {
  return (
    <>
      <div className="footer1">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-2 text-center">
              <h5 className="footer-color">Know Us</h5>
              <h6>Our Menu</h6>
              <h6>Locations</h6>
              <h6>About</h6>
              <h6>Catering</h6>
            </div>
            <div className="col-lg-2 text-center">
              <h5 className="footer-color">Information</h5>
              <h6>Our Story</h6>
              <h6>Our Food</h6>
              <h6>Rewards</h6>
              <h6>Gift Vouchers</h6>
              <h6>Allergens</h6>
              <h6>Franchising</h6>
            </div>
            <div className="col-lg-4 text-center">
              <img className="logo" src={Image1} alt="" />
              <h6>Unit 3, Central Park, Coolock Village.</h6>
              <h6>Dublin5</h6>
              <h6>info@bellpepper.je</h6>
              <h6>018770088</h6>
              <h5 className="footer-color">Follow Us</h5>
              <div className="footer-icons">
              <FaFacebook className="f-icon" />
              <FaInstagram className="f-icon"/>
              <FaTwitter className="f-icon"/>
              <FaPinterest className="f-icon"/>
              <FaTiktok className="f-icon"/>
              </div>
              

            </div>
            <div className="col-lg-4 text-center ">
                <h5 className="footer-color">Sign Up</h5>
                <input type="text " className="input-box py-2" placeholder="Your Email Here"/><BsArrowRightCircleFill/>
            
                <h6 className="py-1">Subscribe Our News Latter <br/>Get Our Lattest News & Offers</h6>
                
                <h6 className="footer-color py-1">Get The Bell Pepper App!</h6>
                <img className="logo" src={Image2} alt="" />
                
             
            </div>
            <hr className="line-color"></hr>
            <p className="text-center copy"><FaCopyright/> 2023 bell Pepper</p>
          </div>
       
        </div>
        
      </div>
    </>
  );
}
