import { React, useState } from "react";
import orderonline from "../../assets/order online and save-06.svg";
import "./orderonline.css";
import pickupicon from "../../assets/pickup icon-06.svg";
import deliveryicon from "../../assets/delivery icon-06.svg";
import locationicon from '../../assets/enter address location-06.svg'
import dropdownicon from '../../assets/icons8-sort-down-30.png'
import crossicon from "../../assets/crossicon.png";
 
export default function Orderonline() {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className={`orderonline ${isFormOpen ? "" : "hidden"}`}>
      <div className="orderonline-container ">
        <form>
          <img className="cross-icon5 d-flex" src={crossicon} alt="" onClick={closeForm} />
          <div className="div">
            <img className="orderonline-logoimg" src={orderonline} alt="" />
          </div>
          <p className="heading-orderonline">Order Online & Save</p>
          <hr className="hr6" />
          <div className="mb-3">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Enter your address"
                className="orderonline-input"
              />
              <img className="orderonline-location-icon" src={locationicon} alt="" />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Choose a store"
                className="orderonline-input"
              />
              <img className="dropdown-icon" src={dropdownicon} alt="" />
            </div>
          </div>
          <p className="orderonline-content">Select your order type</p>
          <div className="icons-container">
            <div className="icon-item">
              <img className="icon" src={pickupicon} alt="" />
              <p className="icon-pickup">Pickup</p>
            </div>
            <div className="icon-item">
              <img className="icon" src={deliveryicon} alt="" />

              
              <p className="icon-pickup">Delivery</p>
            </div>
          </div>
          <button className="orderonlinebutton fs-7" type="button">
            BROWSE MENU
          </button>  
        </form>
      </div>
    </div>
  );
}




