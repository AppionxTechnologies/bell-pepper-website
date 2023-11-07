import React, { useState } from "react";
import "./mycart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Meal from "../../assets/order-mealdeals.jpg";
import cocola from "../../assets/cocola.jpg";
import sevenup from "../../assets/sevenup.jpg";
import fanta from "../../assets/fanta.png";
import crossicon from "../../assets/crossicon.png";
import rightarrow from "../../assets/arrow.png";
import leftarrow from "../../assets/arrowleft.png";
import wheat from "../../assets/wheat.png";
import soya from "../../assets/soya.png";
import cashew from "../../assets/cashew.png";
import { IconButton } from "@mui/material";

export default function Cart() {
  const [first, setFirst] = useState(false);
  const [count, setCount] = useState(2); 

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 100;
  const cardGap = 20;
  const numCards = 1;

  const cards = [
    { image: fanta, title: "Coke (330ml)", price: "€1.90" },
    { image: cocola, title: "Coke (330ml)", price: "€1.90" },
    { image: sevenup, title: "Coke (330ml)", price: "€1.90" },
    { image: fanta, title: "Coke (330ml)", price: "€1.90" },
    { image: cocola, title: "Coke (330ml)", price: "€1.90" },
  ];

  const handleLeftArrowClick = () => {
    if (scrollPosition > -cardWidth * (cards.length + numCards)) {
      setScrollPosition(scrollPosition + cardWidth);
    }
  };

  const handleRightArrowClick = () => {
    if (scrollPosition > -cardWidth * (cards.length - numCards)) {
      setScrollPosition(scrollPosition - cardWidth);
    }
  };

  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <>
      <div className={`mycart ${isFormOpen ? "" : "hidden"}`}>
        <div className="bar"></div>
        <div className="sidebar">
          <div className="title-mycart d-flex fw-bold align-items-center justify-content-between">
            <div className="carttopic">
              <span>MY CART</span>
            </div>
            <img
              className="crossicon-mycart d-flex"
              src={crossicon}
              onClick={closeForm}
              alt=""
            />
          </div>
          <div className="row pickup-mycart g-0">
            <div className="col-12 mt-2 px-3">
              <div className="d-flex align-items-center justify-content-between">
                <span className="fw-bold">Pickup from coolock</span>
                <span>
                  <a href="#" className="changes">
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
            <div className="contents px-4">
              <div className="d-flex fw-semibold justify-content-between flex-row">
                <div>
                  <h6>Chilli & Cashew(L)</h6>
                </div>
                <div>
                  <h6>&#8364;17.98</h6>
                </div>
              </div>
              <p>
                Best Seller. Cashews,scallions,broccoli,pepper and
                <br />
                onions with your protein selection in a homemade
                <br /> Thai seasoning sauce
              </p>
              <button className=" viewallergen"  
                onClick={() => setFirst((prev) => !prev)}
                style={{ cursor: "pointer" }}>
                View Allergens
              </button>
              {first && (
                      <div className="min-box">
                        <div className="min-boxs">
                          <div className="box1">
                            <img src={wheat} alt="" />
                          </div>
                          <h6 className="small-size">Gulten-Wheat</h6>
                        </div>
                        <div className="min-boxs">
                          <div className="box1">
                            <img src={soya} alt=""/>
                          </div>
                          <h6 className="small-size">Soya</h6>
                        </div>
                        <div className="min-boxs">
                          <div className="">
                            <img src={cashew} alt="" />box1
                          </div>
                          <h6 className="small-size">Cashew nut</h6>
                        </div>
                        
                      </div>
                    )}
                    

              <div className="calcbutton d-flex justify-content-around">
                <span type="button" onClick={handleDecrement}>
                  -
                </span>
                <div className="count-color">{count}</div>
                <span type="button" onClick={handleIncrement}>
                  +
                </span>
              </div>
            </div>
          </div>
          <div className="completemeal mt-3">
            <div className="col-12">
              <div className="d-flex px-3flex-row align-items-start justify-content-between">
                <span className="fw-bold mt-2 px-3">COMPLETE YOUR MEAL</span>
              </div>
            </div>
          </div>

          <div
            className="card-navigation"
            style={{ overflow: "hidden", marginTop: "20px" }}
          >
            <div className="leftarrow">
              <IconButton onClick={handleLeftArrowClick}>
                <img src={leftarrow} alt="" />
              </IconButton>
            </div>
            <div
              className="card-container"
              style={{
                display: "flex",
                transform: `translateX(${scrollPosition}px)`,
                transition: "transform 0.3s ease-in-out",
                gap: `${cardGap}px`,
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="card"
                  style={{ width: `${cardWidth}px` }}
                >
                  <img className="card-img-top" src={card.image} alt="" />
                  <div className="card-body">
                    <p className="card-title fw-bold">{card.title}</p>
                    <p className="fw-bold mt-3">{card.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rightarrow">
              <IconButton onClick={handleRightArrowClick}>
                <img src={rightarrow} alt="" />
              </IconButton>
            </div>
          </div>
          {/* <div className="boxes d-flex flex-row align-items-center justify-content-between">
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
          </div> */}

          <div className="splins mt-4">
            <div className="col-12">
              <div className="d-flex px-3flex-row align-items-start justify-content-between">
                <span className="fw-bold mt-2 px-3">SPECIAL INSTRUCTIONS</span>
              </div>
            </div>
          </div>
          <div className="px-4 mt-3">
            <div className="mycart-inputfield">
              <label htmlFor="">Delivery Instructions</label>
              <textarea
                type="textarea"
                defaultValue="Please note, baby sleeping, don't ring the bell,
                alert for driver, Include cutlery, etc."
              />
            </div>
          </div>
          <div className="yrorder mt-3">
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
          <hr className="hrline-mycart" />

          <div className="d-flex align-items-center justify-content-between">
            <button className="backmenubtn">BACK TO MENU</button>
            <button className="checkoutbtn">CHECKOUT- &#8364;17.98</button>
          </div>
        </div>
      </div>
    </>
  );
}
