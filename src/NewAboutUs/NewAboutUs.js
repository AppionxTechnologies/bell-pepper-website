import "./NewAboutUs.css"
import thirdimg from "../assets/aboutus-thirdimg.jpg";
import firstimg from '../assets/aboutus-firstimg.jpg'
import secondimg from '../assets/aboutus-secondimg.jpg'
import { Link } from "react-router-dom"
import React from 'react'

export default function NewAboutUs() {
  
    return (
        <>
            <div className="About-us-container">
                <div className="About-us-Images">
                    <div className="About-us-Img">
                    <Link to="/kitchen"> 
                      <img src={firstimg} alt="" className="about-img" />
                        <h2 className="img-text">OUR STORY</h2></Link>
                    </div>
                   
                        <div className="About-us-Img">
                        <Link to="/grow">
                            <img src={secondimg} alt="" className="about-img" />
                            <h2 className="text-sec">GROW WITH US</h2></Link>
                        </div>
                    
                        <div className="About-us-Img"> 
                        <Link to="/makeorder">
                            <img src={thirdimg} alt="" className="about-img" />
                            <h2 className="img-text">REWARDS</h2>
                            </Link>
                        </div> 
                </div>
                <div className="About-us-Text">
                    <a href="/catering"><span className="span-text"> CATERING</span></a>
                    <a href="/allergen"><span className="span-text">ALLERGENS</span></a>
                </div>
            </div>
        </>


        
    )
}
