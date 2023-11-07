
import React, { useState } from "react";
import { Link } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.css";
import ourStory from "../../assets/Our Story.png";

import wheat from "../../assets/wheat.png";
import soya from "../../assets/soya.png";
import cashew from "../../assets/cashew.png";
import "./LunchMemu.css";

function LunchMenu() {
  const [first, setFirst] = useState(false);
  const [firsts, setFirsts] = useState(false);

  return (
    <>
       
       <div className="Lunch-menu-Container">
       <div className="p-3">
       <h1 className="bold">LUNCH BOX</h1>
        <h6 className="orange">Time: 12p.m - 4p.m</h6>
        <h6 className="light">For takeaway, Pickup or Dine in only.</h6>
      </div>
        <div>
          <button className="takeOut-btn active">STIR FRIES</button>
          <button className="takeOut-btn">CURRIES</button>
          <button className="takeOut-btn">NOODLE</button>
          <button className="takeOut-btn">FRIED RICE</button>
        </div>

        <div className="mt-5">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 col-mx-5">
                <div className="card align-card">
                  <img src={ourStory} className="card-img-top food-color" alt="..." />

                  <div className="card-body">
                    <h5 className="card-title title-size">Crispy Chicken (L)</h5>
                    <h6 className="card-text card-text-size">
                      Best Seller. Cashews, your protein selection with vegetables in our zesty sweet chili sauce. Lightly battered pieces of chicken.
                    </h6>
                    <div className="d-flex justify-content-between parent">
                      <div className="d-flex align-items-center">
                      
                        <h6 className="money-color">&#8364;8.66</h6>
                      </div>
                      <button
                        className="d-flex allergen-small"
                        onClick={() => setFirst((prev) => !prev)}
                        style={{ cursor: "pointer" }}
                      >
                        View Allergens
                      </button>
                      {first && (
                       <div className="min-box">
                       <div className="min-boxs">
                         <div className="box1">
                           <img src={wheat} />
                         </div>
                         <h6 className="small-size">Gulten-Wheat</h6>
                       </div>
                       <div className="min-boxs">
                         <div className="box1">
                           <img src={soya} />
                         </div>
                         <h6 className="small-size">Soya</h6>
                       </div>
                       <div className="min-boxs">
                         <div className="box1">
                           <img src={cashew} />
                         </div>
                         <h6 className="small-size">Cashew nut</h6>
                       </div>
                       
                     </div>
                      )}
                    </div>
                    <Link to="/orderNow">
                      <button className="order-button">ORDER NOW</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card align-card">
                  <img src={ourStory} className="card-img-top food-color" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title title-size">Chilli & Cashew</h5>
                    <h6 className="card-text card-text-size">
                      Best Seller. Cashews, your protein selection with vegetables in our zesty sweet chili sauce. Lightly battered pieces of chicken.
                    </h6>
                    <div className="d-flex justify-content-between parent">
                      <div className="d-flex align-items-center">
                       
                        <h6 className="money-color">&#8364;8.66</h6>
                      </div>
                      <button
                        className="d-flex allergen-small"
                        onClick={() => setFirsts((prev) => !prev)}
                        style={{ cursor: "pointer" }}
                      >
                        View Allergens
                      </button>
                      {firsts && (
                        <div className="min-box">
                        <div className="min-boxs">
                          <div className="box1">
                            <img src={wheat} />
                          </div>
                          <h6 className="small-size">Gulten-Wheat</h6>
                        </div>
                        <div className="min-boxs">
                          <div className="box1">
                            <img src={soya} />
                          </div>
                          <h6 className="small-size">Soya</h6>
                        </div>
                        <div className="min-boxs">
                          <div className="box1">
                            <img src={cashew} />
                          </div>
                          <h6 className="small-size">Cashew nut</h6>
                        </div>
                        
                      </div>
                      )}
                    </div>
                    <Link to="/orderNow">
                      <button className="order-button">ORDER NOW</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default LunchMenu;

