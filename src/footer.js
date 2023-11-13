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
              <h6 className="footer-list">Our Menu</h6>
              <h6 className="footer-list">Locations</h6>
              <h6 className="footer-list">About</h6>
              <h6 className="footer-list">Catering</h6>
            </div>
            <div className="col-lg-2 text-center">
              <h5 className="footer-color">Information</h5>
              <h6 className="footer-list">Our Story</h6>
              <h6 className="footer-list">Rewards</h6>
              <h6 className="footer-list">Allergens</h6>
              <h6 className="footer-list">Grow with us</h6>
            </div>
            <div className="col-lg-4 text-center">
              <img className="logo" src={Image1} alt="" />
              <h6  className="footer-address">Unit 3, Central Park, Coolock Village.</h6>
              <h6  className="footer-address">Dublin5</h6>
              <h6  className="footer-address">info@bellpepper.ie</h6>
              <h6  className="footer-address">018770088</h6>
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
                <input type="text " className="input-box py-1" placeholder="Your Email Here"/><BsArrowRightCircleFill/>
                <div className="py-3">
                  <p className="footer-para">Subscribe Our News Latter</p>
                  <p className="footer-para">Get Our Lattest News & Offers</p>
                </div>
                <h6 className="footer-color py-1">Get The Bell Pepper App!</h6>
                <div>
            <a href="https://play.google.com/store/apps/details?id=com.conduit.app_764cb8c2aced424488a688c58374809c.app&pcampaignid=web_share" tabIndex="0"><img class="bn40" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="bn45"/></a>
            <a href="https://apps.apple.com/tr/app/bell-pepper/id1471100725" tabIndex="0"><img class="bn41" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn46"/></a>
            </div>
                
             
            </div>
            <hr className="line-color mt-2"></hr>
            <p className="text-center copy"><FaCopyright/> 2023 bell Pepper</p>
          </div>
       
        </div>
        
      </div>
    </>
  );
}
