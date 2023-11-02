import "./lunch.css";
// import "bootstrap/dist/css/bootstrap.css";
import ourStory from "../../assets/food-2.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

import { RiMoneyEuroCircleLine } from "react-icons/ri";
function Lunch() {
  const [first, setFirst] = useState(false)
  const [firsts, setFirsts] = useState(false)
  return (
    <>
      <div className="container-fluid ">
        <h1 className="bold">LUNCH BOX</h1>
        <h6 className="orange">Time:12p.m - 4p.m</h6>
        <h6 className="light">For takeaway, Pickup or Dine in only.</h6>
        <div>
          <button className="takeOut-btn active" >STIR FRIES</button>
          <button className="takeOut-btn " >CURRIES</button>
          <button className="takeOut-btn " >NOODLE</button>
          <button className="takeOut-btn " >FRIED RICE</button>
        </div>

        <div className="container-fluid mt-5 mb-3">
          <div className="col-lg-12">
            <div className="row">
              <div className=" col-lg-4 col-mx-5">
                <div class="card align-card">
                  <img
                    src={ourStory}
                    class="card-img-top food-color"
                    alt="..." />

                  <div class="card-body">
                    <h5 class="card-title title-size">Crispy Chicken (L)</h5>
                    <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with
                    vegetables in our zesty sweet chilli sauce.Lightly
                    battered pieces of chicken.
                  </h6>
                    <div className="d-flex justify-content-between parent">
                      <div className="d-flex align-items-center ">
                        <RiMoneyEuroCircleLine className="money-color" />
                        <h6 className="money-color">8.66</h6>
                      </div>
                      <button className="d-flex allergen-small" onClick={() => setFirst((prev) => !prev)} style={{ cursor: "pointer" }}>
                        {/* <img src={icon} alt="..."  className="icon"/> */}
                        View Allergens
                      </button>
                      {first && <div className="min-box">
                      <div className="box1"> <img src={ourStory} />
                      <h6 className="small-size">Cashew nut</h6>  </div>
                      <div className="box1"> <img src={ourStory} />
                      <h6 className="small-size">Soya</h6>    </div>
                      <div className="box1"> <img src={ourStory} /> 
                      <h6 className="small-size">Sesame</h6>  </div>
                    </div>}
                    </div>
                    <Link to='/orderNow' >  <button className="order-button">
                        ORDER NOW
                  </button> </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4" >
                <div class="card align-card">
                  <img
                    src={ourStory}
                    class="card-img-top food-color"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title title-size">Chilli & Cashew</h5>
                    <h6 class="card-text  card-text-size">
                    Best Seller. Cashews,your protein selection with
                    vegetables in our zesty sweet chilli sauce.Lightly
                    battered pieces of chicken.
                  </h6>
                    <div className="d-flex justify-content-between parent">
                      <div className="d-flex align-items-center ">
                        <RiMoneyEuroCircleLine className="money-color" />
                        <h6 className="money-color">8.66</h6>
                      </div>
                      <button className="d-flex allergen-small" onClick={() => setFirsts((prev) => !prev)} style={{ cursor: "pointer" }}>
                        {/* <img src={icon} alt="..."  className="icon"/> */}
                        View Allergens
                      </button>
                      {firsts && <div className="min-box">
                      <div className="box1"> <img src={ourStory} />
                      <h6 className="small-size">Cashew nut</h6>  </div>
                      <div className="box1"> <img src={ourStory} />
                      <h6 className="small-size">Soya</h6>    </div>
                      <div className="box1"> <img src={ourStory} /> 
                      <h6 className="small-size">Sesame</h6>  </div>
                    </div>}
                    </div>
                    <Link to='/orderNow' >  <button className="order-button">
                        ORDER NOW
                  </button> </Link>
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

export default Lunch;
