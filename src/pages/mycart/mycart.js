

import React, { useState } from "react";
import "./mycart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import picklocation from "../../assets/pickup location-06.svg";
import Meal from "../../assets/order-mealdeals.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import cocola from "../../assets/cocola.jpg";
import sevenup from "../../assets/sevenup.jpg";
import fanta from "../../assets/fanta.jpg";
import crossicon from "../../assets/crossicon.png";
import rightarrow from "../../assets/arrow.png";
import leftarrow from "../../assets/arrowleft.png"
import allergenimg from "../../assets/View Allergens-06.svg"
import { IconButton } from "@mui/material";

export default function Cart() {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <>
      <div className={`mycart ${isFormOpen ? "" : "hidden"}`}>
        <div className="bar"></div>
        <div className="sidebar">
          <div className="title d-flex fw-bold align-items-center justify-content-between">
            <div className="carttopic">
              <span>MY CART</span>
            </div>
            <img
              className="crossicon d-flex"
              src={crossicon}
              onClick={closeForm}
            />
          </div>
          <div className="row pickup g-0">
            <div className="col-12 mt-2 px-3">
              <div className="d-flex align-items-center justify-content-between">
                <span className="fw-bold">Pickup from coolock</span>
                <span>
                  <a href="/changes" className="changes">
                    Change
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="imgcontent g-0">
            <div className="mealimg">
              <img src={Meal} alt="" />
            </div>
            <div className="contents">
              <h6 className="fw-bold">Chilli & Cashew(L)</h6>
              <p>
                Best Seller. Cashews,scallions,broccoli,pepper and
                <br />
                onions with your protein selection in a homemade
                <br /> Thai seasoning sauce
              </p>
              <button className="viewallergen" type="button">
              {/* <img className="allergenimg" src={allergenimg} alt="" /> */}
                View Allergen
              </button>
              <button className="calcbutton" type="button">
                {" "}
                - 2 +
              </button>
            </div>
            <div className="amount">
              <p className="fw-bold">&#8364;17.98</p>
            </div>
          </div>
          <div className="completemeal mt-3">
            <div className="col-12">
              <div className="d-flex px-3flex-row align-items-start justify-content-between">
                <span className="fw-bold mt-2 px-3">COMPLETE YOUR MEAL</span>
              </div>
            </div>
          </div>

          <div className="boxes d-flex flex-row align-items-center justify-content-between">
            <div class="card mt-4">
              <img class="card-img-top" src={fanta} alt="" />
              <div class="card-body">
                <p class="card-title fw-bold">Coke (330ml)</p>
                <p className="fw-bold mt-3">&#8364;1.90</p>
              </div>
            </div>
            <div className="leftarrow"><IconButton><img src={leftarrow} alt=""/></IconButton></div>
            <div class="card mt-4">
              <img class="card-img-top" src={cocola} alt="" />
              <div class="card-body">
                <p class="card-title fw-bold">Coke (330ml)</p>
                <p className="fw-bold mt-3">&#8364;1.90</p>
              </div>
            </div>
            <div class="card mt-4">
              <img class="card-img-top" src={sevenup} alt="" />
              <div class="card-body">
                <p class="card-title fw-bold">Coke (330ml)</p>
                <p className="fw-bold mt-3">&#8364;1.90</p>
              </div>
            </div>
            <div class="card mt-4">
              <img class="card-img-top" src={fanta} alt="" />
              <div class="card-body">
                <p class="card-title fw-bold">Coke (330ml)</p>
                <p className="fw-bold mt-3">&#8364;1.90</p>
              </div>
            </div>
            <div className="rightarrow"><IconButton><img src={rightarrow} alt=""/></IconButton></div>
            <div class="card mt-4">
                <img class="card-img-top" src={cocola} alt=""/>
                <div class="card-body">
                    <p class="card-title fw-bold">Coke (330ml)</p>
                    <p className="fw-bold mt-3">&#8364;1.90</p>
                </div>
            </div>
          </div>

          <div className="splins mt-4">
            <div className="col-12">
              <div className="d-flex px-3flex-row align-items-start justify-content-between">
                <span className="fw-bold mt-2 px-3">SPECIAL INSTRUCTIONS</span>
              </div>
            </div>
          </div>
          <div>
            <TextField
              label="Delivery instructions"
              id="outlined-start-adornment"
              sx={{ m: 3, width: "45ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Please note, baby sleeping, don't ring the bell,
                    <br />
                    alert for driver, Include cutlery, etc.
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="yrorder mt-2">
            <div className="col-12">
              <div className="d-flex px-3flex-row align-items-start justify-content-between">
                <span className="fw-bold mt-2 px-3">YOUR ORDER</span>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="px-3 py-1 d-flex flex-row align-items-start justify-content-between">
                <span>Subtotal</span>
                <span>&#8364;17.98</span>
              </div>
              <div className="px-3 py-1 d-flex flex-row align-items-start justify-content-between">
                <span>Tax</span>
                <span>&#8364;00.00</span>
              </div>
              <div className="px-3 py-1 d-flex flex-row align-items-start justify-content-between">
                <span className="fw-bold">Total</span>
                <span className="fw-bold">&#8364;17.98</span>
              </div>
            </div>
          </div>

          <hr className="hrline" />

          <div className="d-flex align-items-center justify-content-between">
            <button className="backmenubtn">BACK TO MENU</button>
            <button className="checkoutbtn">CHECKOUT- &#8364;17.98</button>
          </div>
        </div>
      </div>
    </>
  );
}
