import React, { Component }  from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image1 from "../../assets/meals.png";
import ourMenu from "../../assets/our-menu.png";
import ImageLine from "../../assets/special meals shapes 2.png";
import "../../assets/css/slick.css";
import "../../assets/css/slick-theme.css";
import Slider from "react-slick";
import "./value-meals.css";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

export default function Meals() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <>
      <div className="valueMeals">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6 meals-line d-flex">
              

            <div className=" col-lg-3">
            <img className="meals-line-img" src={ImageLine } alt="Quality Food" />

                  <div className="size-food ">
                    <p className="size  ">SPECIAL</p>
                    <p className="size ">&</p>
                    <p className="size ">VALUE MEALS</p>
                  </div>
            </div>

              <div className="col-lg-3">
                <img className="mealsfood" src={ourMenu} alt="Quality Food" />
              </div>
            </div>

            <div className="col-lg-6 main-box ">
              <div className="icons ">
                <FaArrowCircleUp />
              </div>

              <div className="box1 mt-4 py-2">
                <img className="meals" src={Image1} alt="Quality Food" />
                <div className="">
                  <p className="fw-bold">Dish Name</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="box2 mt-4 py-2">
                <img className="meals1" src={Image1} alt="Quality Food" />
                <div className="">
                  <p className="fw-bold">Dish Name</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="box3 mt-4 py-2">
                <img className="meals2" src={Image1} alt="Quality Food" />
                <div className="">
                  <p className="fw-bold">Dish Name</p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              <div className="icons ">
                <FaArrowCircleDown />
              </div>
            </div>            
          </div>
        </div>
      </div>
      <hr className="line-menu"></hr>
    </>
  );
}
