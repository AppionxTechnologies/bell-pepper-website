import "./TakeOutMenu.css";
import "bootstrap/dist/css/bootstrap.css";
import ourStory from "../../assets/Our Story.png";
import wheat from "../../assets/wheat.png";
import soya from "../../assets/soya.png";
import cashew from "../../assets/cashew.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function TakeOutMenu() {
  const [first, setFirst] = useState(false);
  const [firstA, setFirstA] = useState(false);
  const [firstB, setFirstB] = useState(false);
  const [firstC, setFirstC] = useState(false);
  const [firstD, setFirstD] = useState(false);
  const [firstE, setFirstE] = useState(false);

  const [activeContent, setActiveContent] = useState('starters');


  const showContent = (contentId) => {
    setActiveContent(contentId);
    
  }
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
      <button className={`takeOut-btn ${activeContent === 'starters' && 'active'}`} onClick={() => showContent('starters')}>STARTERS</button>
      <button className={`takeOut-btn ${activeContent === 'soup&salad' && 'active'}`} onClick={() => showContent('soup&salad')}>SOUP & SALAD</button>
      <button className={`takeOut-btn ${activeContent === 'stirFries' && 'active'}`} onClick={() => showContent('stirFries')}>STIR FRIES</button>
      <button className={`takeOut-btn ${activeContent === 'curries' && 'active'}`} onClick={() => showContent('curries')}>CURRIES</button>
      <button className={`takeOut-btn ${activeContent === 'noodle' && 'active'}`} onClick={() => showContent('noodle')}>NOODLE</button>
      <button className={`takeOut-btn ${activeContent === 'friedRice' && 'active'}`} onClick={() => showContent('friedRice')}>FRIED RICE</button>
      <button className={`takeOut-btn ${activeContent === 'vegan' && 'active'}`} onClick={() => showContent('vegan')}>VEGAN</button>
      <button className={`takeOut-btn ${activeContent === 'kidsMenu' && 'active'}`} onClick={() => showContent('kidsMenu')}> KIDS MENU</button>
      <button className={`takeOut-btn ${activeContent === 'seaFood' && 'active'}`} onClick={() => showContent('seaFood')}>SEA FOOD</button>
      <button className={`takeOut-btn ${activeContent === 'sides&Nibbels' && 'active'}`} onClick={() => showContent('sides&Nibbels')}>SIDES & NIBBLES</button>
      <button className={`takeOut-btn ${activeContent === 'beverages' && 'active'}`} onClick={() => showContent('beverages')}>BEVERAGES</button>
       
     
      </div>

      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'starters' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4">
            {activeContent === "starters" && (
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === "starters" && (
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === "starters" && (
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
            )}
            </div>
           
          </div>
        </div>

        <div className="col-lg-12">
          <div className={`row custom-margin-top ${activeContent === 'starters' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4"> 
            {activeContent === 'starters'&& (
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'starters'&& (
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
            )}
            </div>

            <div className="col-lg-4  ">
            {activeContent === 'starters'&& (
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
            )}
            </div>
          </div>
          </div>
          
      </div>
      
    
      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'soup&salad' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'soup&salad'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Chicken Soup</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'soup&salad'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">French Onion Soup</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'soup&salad'&& (
              <div class=" card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Split Pea Soup</h5>
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
            )}
            </div>
           
          </div>
        </div>

        <div className="col-lg-12 ">
          <div className={`row custom-margin-top ${activeContent === 'soup&salad' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === "soup&salad" && (
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Spinach Salad</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === "soup&salad" && (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Cobb Salad</h5>
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
            )}
            </div>

            <div className="col-lg-4  ">
            {activeContent === "soup&salad" && (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Chicken Salad</h5>
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
            )}
            </div>
          </div>
        </div>
      </div>
      






      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'stirFries' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'stirFries'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Chicken Stir fry</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'stirFries'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Beef and Broccoli</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'stirFries'&& (
              <div class=" card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Shrimp Stir Fry</h5>
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
            )}
            </div>
           
          </div>
        </div>

        <div className="col-lg-12">
          <div className={`row custom-margin-top ${activeContent === 'stirFries' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4  ">
            {activeContent === 'stirFries'&& (
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Vegetables Stir Fry</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'stirFries'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Tofu Stir Fry</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'striFries'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Cashew Stir Fry</h5>
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
            )}
            </div>
          </div>
        </div>
      </div>
      










      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'curries' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'curries'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Chicken Curry</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'curries'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Massaman Curry</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'curries'&& (
              <div class=" card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Green Curry</h5>
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
            )}
            </div>
           
          </div>
        </div>
        <div className="col-lg-12">
          <div className={`row custom-margin-top ${activeContent === 'curries' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4  ">
            {activeContent === 'curries'&& (
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Yellow Curry</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'curries'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Red Curry</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'curries'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Panang Curry</h5>
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
            )}
            </div>
          </div>
        </div>
      </div>
      







      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'noodle' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'noodle'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Thai Boat Noodles</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'noodle'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Drunken Noodles</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'noodle'&& (
              <div class=" card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Pad Thai</h5>
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
            )}
            </div>
           
          </div>
        </div>
        <div className="col-lg-12">
          <div className={`row custom-margin-top ${activeContent === 'noodle' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4  ">
            {activeContent === 'noodle'&& (
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Pad See Ew</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'noodle'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Minced Meat Noodles</h5>
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
            )}
            </div>

            <div className="col-lg-4  ">
            {activeContent === 'noodle'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Beef Noodle Soup</h5>
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
            )}
            </div>
          </div>
        </div>
      </div>






      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'friedRice' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'friedRice'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Crab Fried Rice</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'friedRice'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Fresh Shrimp Fried Rice</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'friedRice'&& (
              <div class=" card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Tom Yum Fried Rice</h5>
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
            )}
            </div>
           
          </div>
        </div>
        <div className="col-lg-12">
          <div className={`row custom-margin-top ${activeContent === 'friedRice' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4  ">
            {activeContent === 'friedRice'&& (
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Chili Paste Fried Rice</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'friedRice'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Chicken Fried Rice</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'friedRice'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Pineapple Fried Rice</h5>
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
            )}
            </div>
          </div>
        </div>
      </div>
      





      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'vegan' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'vegan'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Vegetarian Spring Rolls</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'vegan'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Sticky Rice with Mango</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'vegan'&& (
              <div class=" card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Pad See Ew Jay</h5>
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
            )}
            </div>
           
          </div>
        </div>
        <div className="col-lg-12">
          <div className={`row custom-margin-top ${activeContent === 'vegan' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4">
            {activeContent === 'vegan'&& (
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Vegan Tom Yum Soup</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'vegan'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Vegan Papaya Salad</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'vegan'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Massaman Curry Vegetables</h5>
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
            )}
            </div>
          </div>
        </div>
      </div>
      







      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'kidsMenu' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'kidsMenu'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Thai Iced Tea</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'kidsMenu'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Coconut Rice</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'kidsMenu'&& (
              <div class=" card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Mango Sticky Rice</h5>
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
            )}
            </div>
           
          </div>
        </div>
        <div className="col-lg-12">
          <div className={`row custom-margin-top ${activeContent === 'kidsMenu' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'kidsMenu'&& (
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Chicken Noodle Soup</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'kidsMenu'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Thai Sweet and Sour Chicken</h5>
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
            )}
            </div>

            <div className="col-lg-4  ">
            {activeContent === 'kidsMenu'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Spring Rolls</h5>
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
            )}
            </div>
          </div>
        </div>
      </div>
      






      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'seaFood' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'seaFood'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Spicy Shrimp Soup</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'seaFood'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Fried Fish with Chili Sauce</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'seaFood'&& (
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
            )}
            </div>
           
          </div>
        </div>
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'seaFood' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4  ">
            {activeContent === 'seaFood'&& (
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Steamed Fish with Lime</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'seaFood'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Seafood Curry Custard</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'seaFood'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Spicy Shrimp Salad</h5>
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
            )}
            </div>
          </div>
        </div>
      </div>
      






      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'sides&Nibbels' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'sides&Nibbels'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Thai Spring Rolls</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'sides&Nibbels'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Fish Cakes</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'sides&Nibbels'&& (
              <div class=" card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Chicken Satay</h5>
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
            )}
            </div>
           
          </div>
        </div>
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'sides&Nibbels' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4  ">
            {activeContent === 'sides&Nibbels'&& (
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Crispy Wontons</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'sides&Nibbels'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Grilled Corn </h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'sides&Nibbels'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Thai Dumplings  </h5>
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
            )}
            </div>
          </div>
        </div>
      </div>
      








      <div className="">
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'beverages' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'beverages'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Thai Iced Tea</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'beverages'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Thai Iced Coffee</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'beverages'&& (
              <div class=" card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Lime and Lemongrass Drink</h5>
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
            )}
            </div>
           
          </div>
        </div>
        <div className="col-lg-12">
        <div className={`row custom-margin-top ${activeContent === 'beverages' ? 'mt-lg-5' : ''}`}>
            <div className="col-lg-4 ">
            {activeContent === 'beverages'&& (
              <div class=" card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />

                <div class="card-body">
                  <h5 class="card-title title-size">Roselle Juice</h5>
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
            )}
            </div>

            <div className="col-lg-4">
            {activeContent === 'beverages'&& (
              <div class="card align-card ">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Pennywort Juice</h5>
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
            )}
            </div>

            <div className="col-lg-4 ">
            {activeContent === 'beverages'&& (
              <div class="card align-card">
                <img src={ourStory} class="card-img-top food-color" alt="..." />
                <div class="card-body">
                  <h5 class="card-title title-size">Longan Juice </h5>
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
            )}
            </div>
          </div>
        </div>
      </div>
      

      



    </div>
  );
}

export default TakeOutMenu;
