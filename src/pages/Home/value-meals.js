import React, { useRef ,useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image1 from "../../assets/meals.png";
import ourMenu from "../../assets/our-menu.png";
import ImageLine from "../../assets/special meals shapes 2.png";

import Slider from "react-slick";
import "./value-meals.css";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

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
      setActiveCenterCard(activeCenterCard === 5 ? 0 : activeCenterCard - 1);

    }
  };

  const handleSlideDown = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
      setActiveCenterCard(activeCenterCard === 5 ? 0 : activeCenterCard + 1);

    }
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
                  <p className="size  ">SPECIAL</p>
                  <p className="size ">&</p>
                  <p className="size ">VALUE MEALS</p>
                  <div>
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
                {/* <div className="box-1 d-flex">
                  <img className="meals" src={Image1} alt="Quality Food" />
                  <div className="">
                    <p className="fw-bold">Dish Name1</p>
                    <h6>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    </h6>
                  </div>
                </div>
                <div className="box-2 d-flex">
                  <img className="meals1" src={Image1} alt="Quality Food" />
                  <div className="">
                    <p className="fw-bold">Dish Name2</p>
                    <h6>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    </h6>
                  </div>
                </div>
                <div className="box-1 d-flex">
                  <img className="meals2" src={Image1} alt="Quality Food" />
                  <div className="">
                    <p className="fw-bold">Dish Name3</p>
                    <h6>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    </h6>
                  </div>
                </div>
                <div className="box-2 d-flex">
                  <img className="meals2" src={Image1} alt="Quality Food" />
                  <div className="">
                    <p className="fw-bold">Dish Name4</p>
                    <h6>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    </h6>
                  </div>
                </div>
                <div className="box-1 d-flex">
                  <img className="meals2" src={Image1} alt="Quality Food" />
                  <div className="">
                    <p className="fw-bold">Dish Name5</p>
                    <h6>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    </h6>
                  </div>
                </div>
                <div className="box-2 d-flex">
                  <img className="meals2" src={Image1} alt="Quality Food" />
                  <div className="">
                    <p className="fw-bold">Dish Name6</p>
                    <h6>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    </h6>
                  </div>
                </div> */}


                {Array.from({ length: 6 }).map((_, index) => {
          const isCenter = index === activeCenterCard;
          const classNames = `box-${index % 2 === 0 ? 1 : 2} d-flex ${isCenter ? "center-card-hover" : ""}`;

          return (
            <div className={classNames} key={index}>
              <img className={`meals${index % 1 === 0 ? "" : index}`} src={Image1} alt="Quality Food" />
              <div className="">
                <p className="fw-bold">Dish Name{index + 1}</p>
                <h6>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
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
      <hr className="line-menu"></hr>
    </>
  );
}





















// import React, { useRef } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Image1 from "../../assets/meals.png";
// import ourMenu from "../../assets/our-menu.png";
// import ImageLine from "../../assets/special meals shapes 2.png";
// import "../../assets/css/slick.css";
// import "../../assets/css/slick-theme.css";
// import Slider from "react-slick";
// import "./value-meals.css";
// import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

// export default function Meals() {
//   const sliderRef = useRef(null);

//   const sliderSettings = {
//     vertical: true,
//     verticalSwiping: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     arrows: false,
//     dots: false,
//   };

//   const handleSlideUp = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   const handleSlideDown = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };
//   return (
//     <>
//       <div className="valueMeals">
//         <div className="col-lg-12">
//           <div className="row">
//             <div className="col-lg-6 meals-line d-flex">
//               <div className="col-lg-3">
//                 <img
//                   className="meals-line-img"
//                   src={ImageLine}
//                   alt="Quality Food"
//                 />

//                 <div className="size-food ">
//                   <p className="size  ">SPECIAL</p>
//                   <p className="size ">&</p>
//                   <p className="size ">VALUE MEALS</p>
//                   <div>
//                     <button type="button" className="letsgo-button">
//                       LET'S GO
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-3">
//                 <img
//                   className="mealsfood"
//                   src={ourMenu}
//                   alt="Quality Food"
//                 />
//               </div>
//             </div>

//             <div className="col-lg-6 main-box">
//               <div className="icons" onClick={handleSlideUp}>
//                 <FaArrowCircleUp />
//               </div>
//               <Slider {...sliderSettings}>
//                 <div className="box-1 mt-4 py-2">
//                   <img className="meals" src={Image1} alt="Quality Food" />
//                   <div className="">

//                     <p className="fw-bold">Dish Name</p>
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="box2 mt-4 py-2">
//                   <img className="meals1" src={Image1} alt="Quality Food" />
//                   <div className="">
//                     <p className="fw-bold">Dish Name</p>
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="box3 mt-4 py-2">
//                   <img className="meals2" src={Image1} alt="Quality Food" />
//                   <div className="">
//                     <p className="fw-bold">Dish Name</p>
//                     <p>
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry.
//                     </p>
//                   </div>
//                 </div>
//               </Slider>

//               <div className="icons" onClick={handleSlideDown}>
//                 <FaArrowCircleDown />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr className="line-menu"></hr>
//     </>
//   );
// }
