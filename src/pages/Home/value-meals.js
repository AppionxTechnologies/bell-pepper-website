import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image1 from "../../assets/meals.png";
import ourMenu from "../../assets/our-menu.png";
import ImageLine from "../../assets/special meals shapes 2.png";
import valueimg1 from "../../assets/valuemeals card1.jpg";
import valueimg2 from "../../assets/valuemeals card2.jpg";
import valueimg3 from "../../assets/valuemeals card3.jpg";

import { FaArrowCircleLeft } from "react-icons/fa";
import Slider from "react-slick";
import "./value-meals.css";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Meals() {
  const sliderRef = useRef(null);

  const sliderSettings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 3, // Adjust the number of slides to show
    slidesToScroll: 1, // Adjust the number of slides to scroll
    autoplay: false,
    arrows: false,
    dots: false,
  };

  const [activeCenterCard, setActiveCenterCard] = useState(1);
  const handleSlideUp = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setActiveCenterCard(activeCenterCard === 0 ? 5 : activeCenterCard - 1);
    }
  };

  const handleSlideDown = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setActiveCenterCard(activeCenterCard === 5 ? 0 : activeCenterCard + 1);
    }
  };

  const cardData = [
    {
      imgSrc: valueimg1,
      title: "Dish Name",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      imgSrc: valueimg2,
      title: "Dish Name",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      imgSrc: valueimg3,
      title: "Dish Name",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
  ];

  const [activeCard, setActiveCard] = useState(0);

  const handleArrowClick = (direction) => {
    const lastIndex = cardData.length - 1;
    let newIndex = activeCard;

    if (direction === "left") {
      newIndex = activeCard === 0 ? lastIndex : activeCard - 1;
    } else if (direction === "right") {
      newIndex = activeCard === lastIndex ? 0 : activeCard + 1;
    }

    setActiveCard(newIndex);
  };

  return (
    <>
      <div className="valueMeals">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6 meals-line d-flex">
              <div className="col-lg-3">
                <img
                  className="meals-line-img"
                  src={ImageLine}
                  alt="Quality Food"
                />

                <div className="size-food ">
                  <div className="special-topic-desktop">
                    <p className="size  ">SPECIAL</p>
                    <p className="size ">&</p>
                    <p className="size ">VALUE MEALS</p>
                  </div>
                  <div className="letsgo-button-desktop">
                    <button type="button" className="letsgo-button">
                      LET'S GO
                    </button>
                  </div>
                </div>
              </div>

              <img className="mealsfood" src={ourMenu} alt="Quality Food" />
            </div>

            <div className="col-lg-6 main-box">
              <div className="icons" onClick={handleSlideUp}>
                <FaArrowCircleUp />
              </div>

              <div className="slider-valuemeals">
                <Slider ref={sliderRef} {...sliderSettings}>
                  {Array.from({ length: 6 }).map((_, index) => {
                    const isCenter = index === activeCenterCard;
                    const classNames = `box-${index % 2 === 0 ? 1 : 2} d-flex ${
                      isCenter ? "center-card-hover" : ""
                    }`;

                    return (
                      <div className={classNames} key={index}>
                        <img
                          className={`meals${index % 1 === 0 ? "" : index}`}
                          src={Image1}
                          alt="Quality Food"
                        />
                        <div className="">
                          <p className="fw-bold">Dish Name</p>
                          <h6>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>

              <div className="icons" onClick={handleSlideDown}>
                <FaArrowCircleDown />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="valuemeals-mobileview">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6 fs-2 fw-bold d-flex justify-content-center">
              <p>SPECIAL & VALUE MEALS</p>
            </div>
            <div className="col-lg-6 letsgo-button-mobile d-flex justify-content-center">
              <button type="button" className="letsgo-buttonmobile">
                LET'S GO
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className=" arrows-valuemeals d-flex justify-content-between px-4">
              <FaArrowCircleLeft onClick={() => handleArrowClick("left")} />
              <FaArrowCircleRight onClick={() => handleArrowClick("right")} />
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-center">
                <div className="card-valuemeals">
                  <img
                    className="card-imgtop-valuemeals"
                    src={cardData[activeCard].imgSrc}
                    alt="Card image cap"
                  />
                  <div className="card-body-valuemeals mt-4 px-3 mb-4">
                    <h6 className="card-title fw-bold">
                      {cardData[activeCard].title}
                    </h6>
                    <div className="mt-2">
                      <p className="card-text-valuemeals fw-medium">
                        {cardData[activeCard].text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <hr className="line-menu"></hr>
      </div>
    </>
  );
}
