import { React } from "react";
import orderonline from "../../assets/order online and save-06.svg";
import "./orderonline.css";
import pickupicon from "../../assets/pickup icon-06.svg";
import deliveryicon from "../../assets/delivery icon-06.svg";
import locationicon from '../../assets/enter address location-06.svg'
import dropdownicon from '../../assets/icons8-sort-down-30.png'
 
export default function Orderonline() {
  return (
    <div className="orderonline">
      <div className="mainn-container ">
        <form>
          <div className="div">
            <img className="computerr-img" src={orderonline} />
          </div>
          <p className="topic">Order Online & Save</p>
          <hr className="hr" />
          <div className="mb-3">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Enter your address"
                className="input"
              />
              <img className="location-icon" src={locationicon} alt="" />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Choose a store"
                className="input"
              />
              <img className="dropdown-icon" src={dropdownicon} alt="" />
            </div>
          </div>
          <p className="para">Select your order type</p>
          <div className="icons-container">
            <div className="icon-item">
              <img className="icon" src={pickupicon} alt="" />
              <p>Pickup</p>
            </div>
            <div className="icon-item">
              <img className="icon" src={deliveryicon} alt="" />
              <p>Delivery</p>
            </div>
          </div>
          <button className="orderonlinebutton fs-7" type="submit">
            BROWSE MENU
          </button> 
        </form>
      </div>
    </div>
  );
}




