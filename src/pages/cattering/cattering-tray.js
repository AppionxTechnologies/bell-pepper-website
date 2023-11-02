import React from 'react'
import "./cattering-tray.css";
import "bootstrap/dist/css/bootstrap.css";
import ourStory from "../../assets/Our Story.png";
import wheat from "../../assets/wheat.png";
import soya from "../../assets/soya.png";
import cashew from "../../assets/cashew.png";
import cateringbanner from "../../assets/catering-banner.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export  function CateringTray() {
    const [first, setFirst] = useState(false);
    const [firstA, setFirstA] = useState(false);
    const [firstB, setFirstB] = useState(false);
    const [firstC, setFirstC] = useState(false);
    const [firstD, setFirstD] = useState(false);
    const [firstE, setFirstE] = useState(false);
  return (
    <>
    <div>
        <img src={cateringbanner} className="img-length" alt='cateringimg'/>
        <div className="centered">Catering Order</div>
    </div>
     <div className="catering-container">
    <div className="p-2">

<h1 className="bold">CATERING TRAYS</h1>
  
  <p className="light">
    Large version of our popular Main courses with your protein & side selection. Our catering tray serves 6. Great for a house or office party.</p>
    <p className='light'>Price includes disposable plates and cutlery’s </p>
  
  </div>
   

     <div className=" mt-">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-4  mt-3">
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Crispy Chicken Tray</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>
                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center ">
                      <h6 className="money-color">&#8364;72.99</h6>
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
                  <Link to="/orderNow1">
                    {" "}
                    <button className="order-button">ORDER NOW</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4  mt-3">
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Chili Honey Tray</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>

                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center">
                      <h6 className="money-color">&#8364;72.99</h6>
                    </div>
                    <button
                      className="d-flex allergen-small"
                      onClick={() => setFirstA((prev) => !prev)}
                      style={{ cursor: "pointer" }}
                    >
                
                      View Allergens
                    </button>
                    {firstA && (
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
                  <Link to="/orderNow1">
                    {" "}
                    <button className="order-button">ORDER NOW</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-3">
              <div class=" card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Green Curry Tray</h5>
                  
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>
                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center">
                      <h6 className="money-color">&#8364;72.99</h6>
                    </div>
                    <button
                      className="d-flex allergen-small"
                      onClick={() => setFirstB((prev) => !prev)}
                      style={{ cursor: "pointer" }}
                    >
    
                      View Allergens
                    </button>
                    {firstB && (
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
                  <Link to="/orderNow1">
                    {" "}
                    <button className="order-button">ORDER NOW</button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-5">
          <div className="row">
            <div className="col-lg-4 mt-5 ">
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Massaman Tray</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>
                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex">
                      <h6 className="money-color">&#8364;72.99</h6>
                    </div>
                    <button
                      className="d-flex allergen-small"
                      onClick={() => setFirstC((prev) => !prev)}
                      style={{ cursor: "pointer" }}
                    >
                  
                      View Allergens
                    </button>
                    {firstC && (
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
                  <Link to="/orderNow1">
                    {" "}
                    <button className="order-button">ORDER NOW</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-5">
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Singapore Tray</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>
                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center">
                      <h6 className="money-color">&#8364;72.99</h6>
                    </div>
                    <button
                      className="d-flex allergen-small"
                      onClick={() => setFirstD((prev) => !prev)}
                      style={{ cursor: "pointer" }}
                    >
                     
                      View Allergens
                    </button>
                    {firstD && (
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
                  <Link to="/orderNow1">
                    {" "}
                    <button className="order-button">ORDER NOW</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-5 ">
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Bangkok Rice Tray</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>
                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center">
                      <h6 className="money-color">&#8364;72.99</h6>
                    </div>
                    <button
                      className="d-flex allergen-small"
                      onClick={() => setFirstE((prev) => !prev)}
                      style={{ cursor: "pointer" }}
                    >
                    
                      View Allergens
                    </button>
                    {firstE && (
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
                  <Link to="/orderNow1">
                    {" "}
                    <button className="order-button">ORDER NOW</button>{" "}
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
export default CateringTray;