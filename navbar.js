import "bootstrap/dist/css/bootstrap.css";
import login from "./assets/login1.jpg";
import favourite from "./assets/favourite.jpg";
import cart from "./assets/cart-1.jpg";
import logo from "./assets/logo.svg";

import { FaBars   } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";
import { useState } from "react";

// import { Link } from "react-router-dom";
const Navbar = () => {

  const [popOpen,setPopOpen] = useState(false)
  return (
    <>

      <div className="navbar">

        {/* <AiOutlineClose className="bar-icons" />  */}
        <FaBars className="bar-icons" onClick={() => setPopOpen((prev) => !prev )}/>
       
        { popOpen &&  <div className=" phone-style">
          <p>OURMENU</p>
          <p>LOCATIONS</p>

         
       <div>
        <p>ABOUT US</p>
        <MdKeyboardArrowDown className="arrow-down"/>
       </div>
            
          
          <p>CATERING</p>
        </div>}





        <div className="first-div ">
          <p>OURMENU</p>

          <select>
            <option>LOCATIONS</option>
          </select>
          <select>
            <option>ABOUT US</option>
          </select>
          <select>
            <option>CATERING</option>
          </select>
        </div>

        <div className="sec-div">
        <img src={logo} className="img2" alt="" />
        </div>

        <div className="third-div">
          <div className="h-header-icon">
            <img src={login} className="img " alt="" />
            <p>
              Login or <br /> Register{" "}
            </p>
          </div>

          <div className="h-header-icon">
            <img src={favourite} className="img" alt="" />
          </div>

          <div className="h-header-icon">
            <img src={cart} className="img" alt="" />
            <p>17.98 </p>
          </div>
        </div>


        {/* login */}
          <CiUser  className="img logo-icons" />        
      </div>


      {/* phone design  */}


      
     
    
    </>
  );
};

export default Navbar;
