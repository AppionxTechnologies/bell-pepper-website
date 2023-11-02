import React from "react";
import "./map.css";
import locationpage from "../../assets/Location-Page.jpg";
import iconLocation from "../../assets/icon-location.png";
import { Link } from "react-router-dom";

export default function map() {
  return (
    <>
      <div>
        <img src={locationpage} alt="" className="location-banner w-100" />
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-4">
            <p className="fw-bold fs-2 common-heading mt-4">
              Bell Pepper Locations
            </p>
            <div className="location-address">
              <p className="sub-heading fw-bold">
                <img src={iconLocation} alt="" className="icon-location" />
                Bell Pepper Coolock
              </p>
              <div className="para-address px-3 fw-medium">
                <p>Unit 3, Central Park ,</p>
                <p>Malahide Road</p>
                <p>Coolock , Dublin 5,</p>
                <p>Eircode - D05 FF08</p>
              </div>
              <div className="px-5">
                <Link to='/storelocation'> <button type="button" className="view-store-btn">
                  VIEW STORE
                </button></Link>
              </div>
              <hr className="divider" />
              <p className="sub-heading fw-bold">
                <img src={iconLocation} alt="" className="icon-location" />
                Bell Pepper Waterford
              </p>
              <div className="para-address px-3 fw-medium">
                <p>36-37 Great George’s Street,</p>
                <p>Waterford,</p>
                <p>Eircode X91 KFV0</p>
              </div>
              <div className="px-5">
                <button type="button" className="view-store-btn">
                  VIEW STORE
                </button>
              </div>
              <hr className="divider" />
              <p className="sub-heading fw-bold">
                <img src={iconLocation} alt="" className="icon-location" /> Bell
                Pepper Kimmage
              </p>
              <div className="para-address px-3 fw-medium">
                <p>183 Kimmage Road Lower</p>
                <p>Dublin 6 W</p>
                <p>Eircode - D6W NW81</p>
              </div>
              <div className="px-5">
                <button type="button" className="view-store-btn">
                  VIEW STORE
                </button>
              </div>
              <hr className="divider" />
            </div>
            <h3 className="fw-bold px-4">Join our mailing list</h3>
            <div className="px-4 mb-4">
              <input
                type="email"
                placeholder="Your email here"
                className="email-input"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div class="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222793.5254080175!2d-6.558296076915533!3d53.32347952595702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670dcef6be048d%3A0xc0847e6b6317b67a!2sBell%20Pepper%20Kimmage!5e0!3m2!1sen!2sin!4v1698397185935!5m2!1sen!2sin" title="Map for our location"/>
            </div>
          </div>
        </div>
      </div>
    </>
 
 );
 
}

