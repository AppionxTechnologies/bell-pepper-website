import React from "react";
// import './Grow.css';
import "./grow.css";
import growimg from "../../assets/Grow with us-15.png";
import iconimg from "../../assets/Profitable brand-06.svg";
import iconimg1  from "../../assets/Seamless start-06.svg";
import iconimg2 from "../../assets/Extensive training-06.svg";
import iconimg3  from "../../assets/Ongoing support-06.svg";
const Grow = () => {
  return (
    <>
      <div className="Make_Order"> 
        <div className="order-left"> 
          <div className="order-h">
            <h1 className="grow-h1">Grow your success</h1>
            <h1 className="grow-h1">with us</h1>
          </div>
          <div className="order-h2">
            <h1 className="grow-h2">Own the next</h1>
            <h1 className="grow-h2">Asian kitchen.</h1>
          </div>

          <div className="order-para">
            <p>
              At Bell Pepper, we empower people to fuel the lives they want to
              live—and that includes our franchisees. As a franchise owner, you
              have everything you need to reach your business goals while
              positively impacting the people and communities around you.
            </p>
          </div>
          <div className="order-para">
            <p>
              Bell Pepper is a simple and profitable fast-casual dining
              experience with a proven operational system and business model
              that works. Our primary offerings include completely customizable
              curries, noodles, stir-fries, and fried rice through our woks.
              We’re also part of the fastest-growing segment in the restaurant
              industry with 3 locations and counting.
            </p>
          </div>
        </div>
        <div className="order-right">
          <div className="food-img">
            <img src={growimg } alt="" />
          </div>
        </div>
      </div>

      {/* Success-center */}

      <div className="Make_order_Success-center">
        <div className="Success-center-h">
          <h1>why Bell Pepper</h1>
        </div>

        <div className="Success-center-main">
          <div className="Success-center-img">
            <div className="Success-center-images">
              <img src={iconimg} alt="" />
            </div>

            <h4 className="Success-center-title">Profitable brand</h4>
            <div className="Success-center-para">
              <p>
                The Bell Pepper brand is well established and has proven to be
                profitable for our franchisees across the nation.
              </p>
            </div>
          </div>
          <div className="Success-center-img">
            <div className="Success-center-images">
              <img src={iconimg1} alt="" />
            </div>

            <h4 className="Success-center-title">Seamless start</h4>
            <div className="Success-center-para">
              <p>
                Getting started, our home office team assists new Bell Pepper
                franchise owners in site selection, design, and construction
              </p>
            </div>
          </div>
        </div>
        <div className="Success-center-main">
          <div className="Success-center-img">
            <div className="Success-center-images">
              <img src={iconimg2} alt="" />
            </div>

            <h4 className="Success-center-title"> Extensive training </h4>
            <div className="Success-center-para">
              <p>
                We provide thorough training to owners and employees to ensure
                quality and consistency across every kitchen.
              </p>
            </div>
          </div>
          <div className="Success-center-img">
            <div className="Success-center-images">
              <img src={iconimg3} alt="" />
            </div>

            <h4 className="Success-center-title">Ongoing support</h4>
            <div className="Success-center-para">
              <p>
                Once established, ongoing support in operations, IT and
                marketing enables the success of each franchise to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success-center */}

      {/* Success-center-content */}
      <div className="Success-center-content">
        <h4 className="succ_h4">what makes a great owner</h4>
        <div className="success-center-para">
          <p>
            We’re looking for business-minded individuals who are passionate
            about what we’re doing as a company—people who are ready to grow
            with us. If you’re active in your community, understand the market
            you’re proposing for a Bell Pepper development, and believe in what
            our brand stands for, you’re right for the job.
          </p>
        </div>

        <button className="Success-btn"> GET STARTED </button>
      </div>
      {/* Success-center-content */}

      {/* Success-footer */}

      <div className="Success_footer">
        <h1>Our franchising process</h1>
        <div className="Success_footer-container-head">
          <div className="Success_footer-container">
            <div className="Success_footer-center">
              <span>1.</span>
              <h3>Initial call with Bell Pepper</h3>
            </div>

            <div className="Success_footer_para">
              <p>
                We will discuss your interest, experience, and potential
                marketplace as well as answer any questions you may have.
              </p>
            </div>
          </div>
          <div className="Success_footer-container">
            <div className="Success_footer-center">
              <span>3.</span>
              <h3> Meeting with leadership </h3>
            </div>

            <div className="Success_footer_para">
              <p>
                You’ll be invited to meet with the leadership team, where you’ll
                learn more about our goals as a company.
              </p>
            </div>
          </div>
        </div>
        <div className="Success_footer-container-head">
          <div className="Success_footer-container">
            <div className="Success_footer-center">
              <span>1.</span>
              <h3>Initial call with Bell Pepper</h3>
            </div>

            <div className="Success_footer_para">
              <p>
                We will discuss your interest, experience, and potential
                marketplace as well as answer any questions you may have.
              </p>
            </div>
          </div>
          <div className="Success_footer-container">
            <div className="Success_footer-center">
              <span>4.</span>
              <h3> Franchise approval</h3>
            </div>

            <div className="Success_footer_para">
              <p>
                Once you're approved as a franchisee and sign the necessary
                agreements, you'll officially be a member of the Bell Pepper
                family.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Success-footer */}
    </>
  );
};

export default Grow;