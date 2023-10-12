import React from "react";
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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
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
          </div>
          <div>
            <img src={Image2} alt="Image 2" className=" img1" />
          </div>
          <div>
            <img src={Image3} alt="Image 3" className=" img1" />
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
                VIEW FULL MENU
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
