import React from "react";
import "./orderconfirm.css";

export default function OrderConfirm() {
  return (
    <div className="orderconfirm">
      <div className="main-containerr">
        <form>
          <p className="form-title">ADD DELIVERY ADDRESS</p>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter your address"
              className="inputs"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Apartment number or suit"
              className="inputs"
            />
          </div>
          <div className="mb-3">
            <input type="text" placeholder="Eircode" className="inputs" />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="address" name="address"/>
            <label for="address"> Make default delivery address</label>
          </div>
          <button className="btn-button" type="button">
            CONFIRM
          </button>
        </form>
      </div>
    </div>
  );
}
