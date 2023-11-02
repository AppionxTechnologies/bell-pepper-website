import "./TakeOutMenu.css";
import "bootstrap/dist/css/bootstrap.css";
import ourStory from "../../assets/Our Story.png";
import wheat from "../../assets/wheat.png";
import soya from "../../assets/soya.png";
import cashew from "../../assets/cashew.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import { RiMoneyEuroCircleLine } from "react-icons/ri";
function TakeOutMenu() {
  const [first, setFirst] = useState(false);
  const [firstA, setFirstA] = useState(false);
  const [firstB, setFirstB] = useState(false);
  const [firstC, setFirstC] = useState(false);
  const [firstD, setFirstD] = useState(false);
  const [firstE, setFirstE] = useState(false);
  return (
    <div className="TakeOutMenu-container">
    <div className="p-2">

    <h1 className="bold">TAKEOUT</h1>
      <h6 className="orange">Time:12p.m - 4p.m</h6>
      <h6 className="light">
        From 12 p.m. - 4 P.m. takeaway, pick up or Dine in only , Delivery Start
        from 4 p.m.
      </h6>
      </div>
      
      <div className="p-2">
        <button className="takeOut-btn active">STARTERS</button>
        <button className="takeOut-btn">SOUP & SALAD</button>
        <button className="takeOut-btn">STIR FRIES</button>
        <button className="takeOut-btn">CURRIES</button>
        <button className="takeOut-btn">NOODLES</button>
        <button className="takeOut-btn">FRIED RICE</button>
        <button className="takeOut-btn">VEGAN</button>
        <button className="takeOut-btn"> KIDS MENU</button>
        <button className="takeOut-btn">SEAFOOD</button>
        <button className="takeOut-btn">SIDES & NIBBLES</button>
        <button className="takeOut-btn">BEVERAGES</button>
      </div>

      <div className=" mt-">
        <div className="col-lg-12">
          <div className="row ">
            <div className="col-lg-4  mt-3">
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Chicken Gyoza</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>
                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center ">
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
                  <h5 class="card-title title-size">Sweet & Spicy Wings</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>

                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center">
                      <h6 className="money-color">&#8364;8.66</h6>
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
                  <Link to="/orderNow">
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
                  <h5 class="card-title title-size">Grilled Chicken Skewers</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>
                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center">
                      <h6 className="money-color">&#8364;8.66</h6>
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
                  <Link to="/orderNow">
                    {" "}
                    <button className="order-button">ORDER NOW</button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4 mt-5 ">
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Chicken Gyoza</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>
                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex">
                      <h6 className="money-color">&#8364;8.66</h6>
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
                  <Link to="/orderNow">
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
                  <h5 class="card-title title-size">Sweet & Spicy Wings</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>
                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center">
                      <h6 className="money-color">&#8364;8.66</h6>
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
                  <Link to="/orderNow">
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
                  <h5 class="card-title title-size">Grilled Chicken Skewers</h5>
                  <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with vegetables
                    in our zesty sweet chilli sauce.Lightly battered pieces of
                    chicken.
                  </h6>
                  <div className="d-flex justify-content-between parent">
                    <div className="d-flex align-items-center">
                      <h6 className="money-color">&#8364;8.66</h6>
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
                  <Link to="/orderNow">
                    {" "}
                    <button className="order-button">ORDER NOW</button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 ">
        <nav aria-label="... ">
          <ul class="pagination  ">
            <li class="page-item">
              <a class="page-link page-color">1</a>
            </li>
            <li class="page-item " aria-current="page">
              <a class="page-link page-color">2</a>
            </li>

            <li class="page-item ">
              <a class="page-link page-color">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TakeOutMenu;
