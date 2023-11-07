import React,{ useState, useEffect, useContext, useCallback} from "react";
import Meals from './value-meals';

import Image1 from "../../assets/food-4.jpg";
import Image2 from "../../assets/food-3.jpg";
import Image3 from "../../assets/food-2.jpg";
import ourMenu from "../../assets/our-menu.png";
import reward from "../../assets/rewards-banner.png";
import orderCatering from "../../assets/order-catering.jpg";
import orderTakout from "../../assets/order-takout.jpg";
import orderMealdeals from "../../assets/order-mealdeals.jpg";
import "./home.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Banner from '../../banner';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Home() {
  return (
    <>
      <div className="carousel-container">
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={1500}
          showThumbs={false}
          showStatus={false}
          className="w-100"
        >
          <div>
            <img src={Image1} alt="Image 1" className=" img1" />
            <div class="corousel-text1"><h1>Bellpepper</h1>
            <h1> Feel Good</h1>
            <h1>Thai Restaurant</h1>
            <h1>& Takeaway</h1>
            <div className="corousel-text2">
            <p>at right Love yourself bell pepper is all about fresh ,</p>
            <p>nutritious tasty food cooked to order</p>
           </div>
           <div>
            <button className="corousel-button">Order Online</button>
           </div>
           </div>
          </div>
               
        
          <div>
            <img src={Image2} alt="Image 2" className=" img1" />
            <div className="location-text1">
          <h1>Bell Pepper Locations</h1>
          <h1>Thai Restaurant</h1>
          <h1>Dublin, Waterford</h1>
          <div className="location-text2">
            <p>At bell pepper amazing Thai food is not where</p>
            <p>our work ends. The idea behind Bell Pepper is simple.</p>
            <p>We take the name seriously (and literally!).</p>
            <p>It’s all about fresh, tasty Thai food cooked to</p>
            <p>order in minutes.</p>
          </div>
        </div>
          </div>
          <div>
            <img src={Image3} alt="Image 3" className=" img1" />
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
         
        </Carousel>
      </div>

      <div className="con-div">
        <p>
          Try our NEW digital-exclusive!{" "}
          <a href="#">Order Soft & Chilli Chiken Chips</a>{" "}
        </p>
      </div>

       {/* explore menu section */}
       <section className="our_menu">
        <Container maxWidth="lg">
          <div className="common_title">
            <h2>EXPLORE OUR MENU</h2>
          </div>
          <Grid
            className="menu-container"
            container
            spacing={{ xs: 3, md: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <img className="menuimg" src={ourMenu} alt="Menu" />
              <h3 className="menu-text">Takeout</h3>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <img className="menuimg" src={ourMenu} alt="Menu" />
              <h3 className="menu-text">Lunch Box</h3>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <div>
                <div>
                  <img className="menuimg" src={ourMenu} alt="Menu" />
                  <h3 className="menu-text">Deal Deals</h3>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={12} className="menu-btn-align">
              <Button className="menu-btn" variant="contained">
              <a href="/menu" style={{textDecoration: 'none', color: '#fff'}}>
                VIEW FULL MENU
                </a>
              </Button>
            </Grid>
          </Grid>
        </Container>
        <hr className="line-menu"></hr>
      </section>

      {<Meals/>}
     {/* our loyalty section */}
     <section className="our_menu">
        <Container maxWidth="lg">
          <div className="common_title">
            <h2>Our Loyalty & Rewards Program</h2>
          </div>
          <Grid
            className="loyal-section"
            container
            spacing={{ xs: 3, md: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={6} >
              <h3 className="loyal-menu">Reward yourself with our new app</h3>
              <p>
                Unlock a delicious new world of perks when you join our free
                loyalty program and earn rewards, birthday gifts, menu
                exclusives and more.
              </p>
              <Button className="loyal-btn" variant="contained">
                JOIN REWARDS
              </Button>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <img className="menuimg" src={reward} alt="Menu" />
            </Grid>
          </Grid>
        </Container>
        <hr className="line-menu"></hr>
      </section>

      {/* choose order section */}
      <section className="our_menu">
        <Container maxWidth="lg">
          <div className="common_title">
            <h2>CHOOSE YOUR ORDER</h2>
          </div>
          <Grid
            className="order-container"
            container
            spacing={{ xs: 3, md: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <img className="orderimg" src={orderTakout} alt="Menu" />
              <h3 className="order-text">TAKEOUT</h3>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <img className="orderimg" src={orderCatering} alt="Menu" />
              <h3 className="order-text">CATERING</h3>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <div>
                <div>
                  <img className="orderimg" src={orderMealdeals} alt="Menu" />
                  <h3 className="order-text">MEAL DEALS</h3>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <hr className="line-menu"></hr>
      </section>
        {/* services section */}
      <Banner/>
    </>
  );
}
