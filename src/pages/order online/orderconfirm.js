import {React,useState} from "react";
import "./orderconfirm.css";
import crossicon from "../../assets/crossicon.png";


export default function OrderConfirm() {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className={`orderconfirm ${isFormOpen ? "" : "hidden"}`}>
      <div className="addressform-containerr">
        <form>
          <img className="cross-icon6 d-flex" src={crossicon} alt="" onClick={closeForm} />
          <p className="heading-addressform">ADD DELIVERY ADDRESS</p>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter your address"
              className="addressform-inputs"
            />
          </div>
          <div className="mb-3"> 
            <input
              type="text"
              placeholder="Apartment number or suit"
              className="addressform-inputs"
            />
          </div>
          <div className="mb-3">
            <input type="text" placeholder="Eircode" className="addressform-inputs" />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="address" name="address"/>
            <label for="address"> Make default delivery address</label>
          </div>
          <button className="addressform-button" type="button">
            CONFIRM
          </button>
        </form>
      </div>
    </div>
  );
}
