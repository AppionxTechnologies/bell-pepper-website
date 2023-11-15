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

  const [activeContent, setActiveContent] = useState("stirFries");

  const showContent = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <>
      <div className="Lunch-menu-Container">
        <div className="p-3">
          <h1 className="bold">LUNCH BOX</h1>
          <h6 className="orange">Time: 12p.m - 4p.m</h6>
          <h6 className="light">For takeaway, Pickup or Dine in only.</h6>
        </div>
        <div>
          <button
            className={`takeOut-btn ${
              activeContent === "stirFries" && "active"
            }`}
            onClick={() => showContent("stirFries")}
          >
            STIR FRIES
          </button>
          <button
            className={`takeOut-btn ${activeContent === "curries" && "active"}`}
            onClick={() => showContent("curries")}
          >
            CURRIES
          </button>
          <button
            className={`takeOut-btn ${activeContent === "noodle" && "active"}`}
            onClick={() => showContent("noodle")}
          >
            NOODLE
          </button>
          <button
            className={`takeOut-btn ${
              activeContent === "friedRice" && "active"
            }`}
            onClick={() => showContent("friedRice")}
          >
            FRIED RICE
          </button>
        </div>

        <div className="mt-5">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 col-mx-5">
                {activeContent === "stirFries" && (
                  <div className="card align-card">
                    <img
                      src={ourStory}
                      className="card-img-top food-color"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title title-size">
                        Crispy Chicken 
                      </h5>
                      <h6 className="card-text card-text-size">
                        Best Seller. Cashews, your protein selection with
                        vegetables in our zesty sweet chili sauce. Lightly
                        battered pieces of chicken.
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
                                <img src={wheat} alt="wheat" />
                              </div>
                              <h6 className="small-size">Gluten-Wheat</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={soya} alt="soya" />
                              </div>
                              <h6 className="small-size">Soya</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={cashew} alt="cashew" />
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
                )}
              </div>

              <div className="col-lg-4">
                {activeContent === "stirFries" && (
                  <div className="card align-card">
                    <img
                      src={ourStory}
                      className="card-img-top food-color"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title title-size">Chilli & Cashew</h5>
                      <h6 className="card-text card-text-size">
                        Best Seller. Cashews, your protein selection with
                        vegetables in our zesty sweet chili sauce. Lightly
                        battered pieces of chicken.
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
                                <img src={wheat} alt="wheat" />
                              </div>
                              <h6 className="small-size">Gluten-Wheat</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={soya} alt="soya" />
                              </div>
                              <h6 className="small-size">Soya</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={cashew} alt="cashew" />
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
                )}
              </div>
            </div>
          </div>

          <div className="">
            <div className="row">
              <div className="col-lg-4 col-mx-5">
                {activeContent === "curries" && (
                  <div className="card align-card active-content">
                    <img
                      src={ourStory}
                      className="card-img-top food-color"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title title-size">
                        Massaman Curry
                      </h5>
                      <h6 className="card-text card-text-size">
                        Best Seller. Cashews, your protein selection with
                        vegetables in our zesty sweet chili sauce. Lightly
                        battered pieces of chicken.
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
                                <img src={wheat} alt="wheat" />
                              </div>
                              <h6 className="small-size">Gluten-Wheat</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={soya} alt="soya" />
                              </div>
                              <h6 className="small-size">Soya</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={cashew} alt="cashew" />
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
                )}
              </div>

              <div className="col-lg-4">
                {activeContent === "curries" && (
                  <div className="card align-card active-content">
                    <img
                      src={ourStory}
                      className="card-img-top food-color"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title title-size">Yellow Curry</h5>
                      <h6 className="card-text card-text-size">
                        Best Seller. Cashews, your protein selection with
                        vegetables in our zesty sweet chili sauce. Lightly
                        battered pieces of chicken.
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
                                <img src={wheat} alt="wheat" />
                              </div>
                              <h6 className="small-size">Gluten-Wheat</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={soya} alt="soya" />
                              </div>
                              <h6 className="small-size">Soya</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={cashew} alt="cashew" />
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
                )}
              </div>
            </div>
          </div>

          <div className="">
            <div className="row">
              <div className="col-lg-4 col-mx-5">
                {activeContent === "noodle" && (
                  <div className="card align-card active-content">
                    <img
                      src={ourStory}
                      className="card-img-top food-color"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title title-size">
                        Crispy Noodles
                      </h5>
                      <h6 className="card-text card-text-size">
                        Best Seller. Cashews, your protein selection with
                        vegetables in our zesty sweet chili sauce. Lightly
                        battered pieces of chicken.
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
                                <img src={wheat} alt="wheat" />
                              </div>
                              <h6 className="small-size">Gluten-Wheat</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={soya} alt="soya" />
                              </div>
                              <h6 className="small-size">Soya</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={cashew} alt="cashew" />
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
                )}
              </div>

              <div className="col-lg-4">
                {activeContent === "noodle" && (
                  <div className="card align-card active-content">
                    <img
                      src={ourStory}
                      className="card-img-top food-color"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title title-size">Vegetables Noodles</h5>
                      <h6 className="card-text card-text-size">
                        Best Seller. Cashews, your protein selection with
                        vegetables in our zesty sweet chili sauce. Lightly
                        battered pieces of chicken.
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
                                <img src={wheat} alt="wheat" />
                              </div>
                              <h6 className="small-size">Gluten-Wheat</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={soya} alt="soya" />
                              </div>
                              <h6 className="small-size">Soya</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={cashew} alt="cashew" />
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
                )}
              </div>
            </div>
          </div>

          <div className="">
            <div className="row">
              <div className="col-lg-4 col-mx-5">
                {activeContent === "friedRice" && (
                  <div className="card align-card active-content">
                    <img
                      src={ourStory}
                      className="card-img-top food-color"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title title-size">
                        Chicken Rice
                      </h5>
                      <h6 className="card-text card-text-size">
                        Best Seller. Cashews, your protein selection with
                        vegetables in our zesty sweet chili sauce. Lightly
                        battered pieces of chicken.
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
                                <img src={wheat} alt="wheat" />
                              </div>
                              <h6 className="small-size">Gluten-Wheat</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={soya} alt="soya" />
                              </div>
                              <h6 className="small-size">Soya</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={cashew} alt="cashew" />
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
                )}
              </div>

              <div className="col-lg-4">
                {activeContent === "friedRice" && (
                  <div className="card align-card active-content">
                    <img
                      src={ourStory}
                      className="card-img-top food-color"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title title-size">Fresh Shrimp Fried Rice</h5>
                      <h6 className="card-text card-text-size">
                        Best Seller. Cashews, your protein selection with
                        vegetables in our zesty sweet chili sauce. Lightly
                        battered pieces of chicken.
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
                                <img src={wheat} alt="wheat" />
                              </div>
                              <h6 className="small-size">Gluten-Wheat</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={soya} alt="soya" />
                              </div>
                              <h6 className="small-size">Soya</h6>
                            </div>
                            <div className="min-boxs">
                              <div className="box1">
                                <img src={cashew} alt="cashew" />
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LunchMenu;
