import React from "react";
import "./NewMenuListItem.css";
import { Link } from "react-router-dom";
import LunchMenu from "../NewMenuListItemPages/LunchMenu";
import { useState } from "react";
 import lunchimg from "../../assets/food-2.jpg";
import TakeOutMenu from "../NewMenuListItemPages/TakeOutMenu";
import { ClassNames } from "@emotion/react";

const NewMenuListItem = () => {
  const [lunchMenu, setLunchMenu] = useState(true);
  const [takeOutClickPop, setTakeOutClickPop] = useState(false);
  const LunchMemuClick = () => {
    setLunchMenu(true);
    setTakeOutClickPop(false);
  };
  const TakeOutClick = () => {
    setTakeOutClickPop(true);
    setLunchMenu(false);
  };
  
  return (

    
    <div>
      <div>
        <img src={lunchimg} alt="" className="lunch-banner"/>
        <div className="lunch-text1">
          <h1>Bellpepper Authentic</h1>
          <h1>Healthy Thai Restaurant</h1>
          <h1>Dublin , Waterford</h1>
        </div>
        <div className="lunch-text2">
          <p>Our Ingredients are locally sourced and 100% MSG Free</p>
        </div>
        <div className="lunch-text3">
        <p>It's all about fresh , nutritious tasty food cooked in front</p>
          <p>of your eyes and served to you in minutes.</p>
        </div>
      </div>
      <div className="NewMenuListItem">
        <div className="NewMenuListItem-left">
          <nav>
            <p onClick={LunchMemuClick} className="text-secondary py-2">LUNCH BOX</p>
            <p onClick={TakeOutClick } className="text-secondary py-2">TAKEOUT</p>
            <p className="text-secondary py-2">MEAL DEALS</p>
            <p className="text-secondary py-2">SPECIAL&VALUE MEALS</p>

            <div className="animation "></div>
          </nav>
        </div>

        <div className="hrline "></div>

        {lunchMenu && <LunchMenu />}
        {takeOutClickPop && <TakeOutMenu />}
      </div>
    </div>
  );
};

export default NewMenuListItem;
