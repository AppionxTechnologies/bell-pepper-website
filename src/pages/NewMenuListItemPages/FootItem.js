import { Link } from "react-router-dom";
import "./FootItem.css";
import "bootstrap/dist/css/bootstrap.css";
import tofu from "../../assets/tofu.jpg";
import chicken from "../../assets/chicken.jpg";
import beef from "../../assets/beef.jpg";
import Prawns from "../../assets/prawns.jpg";
import duck from "../../assets/duck.jpg";
import cashewnut from "../../assets/cashewnut.jpg";
import broccoli from "../../assets/broccoli.jpg";
import asian from "../../assets/asian.jpg";
import norice from "../../assets/norice.jpg";
import jasmine from "../../assets/jasmine.jpg";
import Brown from "../../assets/brownrice.jpg";
import wheat from "../../assets/wheat.png";
import soya from "../../assets/soya.png";
import cashew from "../../assets/cashew.png";
import ourStory from "../../assets/Our Story.png";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
function FootItem() {
  const [firstl, setFirstl] = useState(false);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleZero = () => {
    setCount(0);
  };

  const [countA, setCountA] = useState(0);
  const handleClickA = () => {
    setCountA(countA + 1);
  };

  const handleZeroA = () => {
    setCountA(0);
  };

  const [countB, setCountB] = useState(0);
  const handleClickB = () => {
    setCountB(countB + 1);
  };

  const handleZeroB = () => {
    setCountB(0);
  };

  const [countC, setCountC] = useState(0);
  const handleClickC = () => {
    setCountC(countC + 1);
  };

  const handleZeroC = () => {
    setCountC(0);
  };

  const [countD, setCountD] = useState(0);
  const handleClickD = () => {
    setCountD(countD + 1);
  };

  const handleZeroD = () => {
    setCountD(0);
  };
  const [countE, setCountE] = useState(0);
  const handleClickE = () => {
    setCountE(countE + 1);
  };

  const handleZeroE = () => {
    setCountE(0);
  };

  const [countF, setCountF] = useState(0);
  const handleClickF = () => {
    setCountF(countF + 1);
  };

  const handleZeroF = () => {
    setCountF(0);
  };
  const [countX, setCountX] = useState(0);
  const handleClickX = () => {
    setCountX(countX + 1);
  };

  const handleZeroX = () => {
    setCountX(0);
  };
  const [countZ, setCountZ] = useState(0);
  const handleClickZ = () => {
    setCountZ(countZ + 1);
  };

  const handleZeroZ = () => {
    setCountZ(0);
  };

  return (
    <>
      <div className="nav-color">
        <Link to="/" className="px-4 text-white text-decoration-none">
          <h6 className="back-menu">
            {" "}
            <IoChevronBackCircleOutline className="back-icon" />
            BACK TO MENU
          </h6>
        </Link> 
      </div>
      <div className="main">
        <div className="col-lg-12 bac-bar">
          <div className="row">
            <div className="col-lg-4 bg-white">
              <p className="px-3 head-bold">Chilli & Cashew (L)</p>
              <p className="px-3 ingridiants">
                Best Seller. Cashews, scallions, broccoli, peppers, and onions
                with your protein selection in a homemade Thai seasoning sauce
              </p>
              <div className="px-3 parent">
                <button
                  className="allergen-btn"
                  onClick={() => setFirstl((prev) => !prev)}
                  style={{ cursor: "pointer" }}
                >
                  View Allergens
                </button>
                {firstl && (
                  <div className="small-box">
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
              <div className=" bac-bar header mt-2">
                <p className="pt-2 heading-bar">CHOOSE A PROTEIN</p>
                <button className="btn  FootItembtn ">Choose 1</button>
              </div>
              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="FootItem-image1">
                    <img src={tofu} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Tofu</span>
                    <span className="free px-2">(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="FootItem-input" />
                </div>
              </div>

              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="FootItem-image1">
                    <img src={chicken} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Chicken</span>
                    <span className="free px-2">(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="FootItem-input" />
                </div>
              </div>

              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="FootItem-image1">
                    <img src={beef} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Irish Beef</span>
                    <span className="free px-2">(1.00)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="FootItem-input" />
                </div>
              </div>

              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="FootItem-image1">
                    <img src={Prawns} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Prawns</span>
                    <span className="free px-2">(0.50)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="FootItem-input" />
                </div>
              </div>

              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="FootItem-image1">
                    <img src={duck} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Duck</span>
                    <span className="free px-2">(0.50)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="FootItem-input" />
                </div>
              </div>

              <div className=" bac-bar header mt-2">
                <p className="pt-2 heading-bar">ADD SOME EXTRA WITH MEAL</p>
                <button className="btn  FootItembtn ">Choose 2</button>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="FootItem-image1">
                    <img src={tofu} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Tofu</span>
                    <span className="free px-2">(1.75)</span>
                  </div>
                </div>
                <div className="icon-border">
                  <AiOutlineDelete
                    className="icon-color"
                    onClick={handleZero}
                  />
                  <span>{count}</span>
                  <BsPlus className="icon-color" onClick={handleClick} />
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="FootItem-image1">
                    <img src={chicken} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Chicken</span>
                    <span className="free px-2">(3.00)</span>
                  </div>
                </div>
                <div className="icon-border">
                  <AiOutlineDelete
                    className="icon-color"
                    onClick={handleZeroA}
                  />
                  <span>{countA} </span>
                  <BsPlus className="icon-color" onClick={handleClickA} />
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="FootItem-image1">
                    <img src={beef} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Irish Beef</span>
                    <span className="free px-2">(3.25)</span>
                  </div>
                </div>
                <div className="icon-border">
                  <AiOutlineDelete
                    className="icon-color"
                    onClick={handleZeroB}
                  />
                  <span>{countB}</span>
                  <BsPlus className="icon-color" onClick={handleClickB} />
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="FootItem-image1">
                    <img src={Prawns} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Prawns</span>
                    <span className="free px-2">(3.25)</span>
                  </div>
                </div>
                <div className="icon-border">
                  <AiOutlineDelete
                    className="icon-color"
                    onClick={handleZeroC}
                  />
                  <span>{countC}</span>
                  <BsPlus className="icon-color" onClick={handleClickC} />
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="FootItem-image1">
                    <img src={duck} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Duck</span>
                    <span className="free px-2">(3.25)</span>
                  </div>
                </div>
                <div className="icon-border">
                  <AiOutlineDelete
                    className="icon-color"
                    onClick={handleZeroD}
                  />
                  <span>{countD}</span>
                  <BsPlus className="icon-color" onClick={handleClickD} />
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="FootItem-image1">
                    <img src={cashewnut} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Cashew Nuts</span>
                    <span className="free px-2">(0.75)</span>
                  </div>
                </div>
                <div className="icon-border">
                  <AiOutlineDelete
                    className="icon-color"
                    onClick={handleZeroE}
                  />
                  <span>{countE}</span>
                  <BsPlus className="icon-color" onClick={handleClickE} />
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="FootItem-image1">
                    <img src={ourStory} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Mix Pepper</span>
                    <span className="free px-2">(1.0)</span>
                  </div>
                </div>
                <div className="icon-border">
                  <AiOutlineDelete
                    className="icon-color"
                    onClick={handleZeroF}
                  />
                  <span>{countF}</span>
                  <BsPlus className="icon-color" onClick={handleClickF} />
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="FootItem-image1">
                    <img src={broccoli} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Broccoli</span>
                    <span className="free px-2">(1.0)</span>
                  </div>
                </div>
                <div className="icon-border">
                  <AiOutlineDelete
                    className="icon-color"
                    onClick={handleZeroZ}
                  />
                  <span>{countZ}</span>
                  <BsPlus className="icon-color" onClick={handleClickZ} />
                </div>
              </div>

              <div className="d-flex justify-content-between  mt-2">
                <div className="d-flex mx-3">
                  <div className="FootItem-image1">
                    <img src={asian} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column ">
                    <span className="px-2">Asian Green</span>
                    <span className="free px-2">(1.0)</span>
                  </div>
                </div>
                <div className="icon-border">
                  <AiOutlineDelete
                    className="icon-color"
                    onClick={handleZeroX}
                  />
                  <span>{countX}</span>
                  <BsPlus className="icon-color" onClick={handleClickX} />
                </div>
              </div>

              <div className=" bac-bar header mt-2">
                <p className="pt-2 heading-bar">CHOOSE A SIDE</p>
                <button className="btn  FootItembtn ">Choose 1</button>
              </div>

              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="FootItem-image1">
                    <img src={norice} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">No Rice</span>
                    <span className="free px-2">(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="FootItem-input" />
                </div>
              </div>
              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="FootItem-image1">
                    <img src={jasmine} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Jasmine Rice</span>
                    <span className="free px-2">(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="FootItem-input" />
                </div>
              </div>
              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="FootItem-image1">
                    <img src={Brown} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Brown Rice</span>
                    <span className="free px-2">(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="FootItem-input" />
                </div>
              </div>
              <div className="d-flex justify-content-between px-3 mt-2">
                <div className="d-flex ">
                  <div className="FootItem-image1">
                    <img src={ourStory} alt="FootItem image" />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="px-2">Egg Fried Rice</span>
                    <span className="free px-2">(Free)</span>
                  </div>
                </div>
                <div>
                  <input type="radio" className="FootItem-input" />
                </div>
              </div>
              <div>
                <div className="footer mx-4 mt-4">
                  <span className="span">Cooking Instructions</span>
                  <p className="footer-conten">
                    Please note, Modifications to your order: spicy, no onion,
                    more cheese, etc.
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="last-button1">
                    <AiOutlineMinus className="icon-zero" />
                  </button>
                  <h5 className="number-zero">0</h5>
                  <button className="last-button2">
                    <AiOutlinePlus className="icon-zero" />
                  </button>
                </div>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-between mb-3">
                <p className="number-color">
                  <RiMoneyEuroCircleLine />
                  17.98
                </p>
                <button className="add-cart">ADD TO CART</button>
              </div>
            </div>

            <div className="col-lg-8 FootItem-footer">
              <img src={ourStory} className="mt-5" alt="food" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FootItem;
