import "bootstrap/dist/css/bootstrap.css";
import login from "./assets/login1.jpg";
import favourite from "./assets/favourite.jpg";
import cart from "./assets/cart-1.jpg";
import logo from "./assets/logo.svg";
import googleapple from "./assets/playstore and apple store icon-05.svg";
import { FaBars } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import "./Navbar.css";
import { useState } from "react";
import NewAboutUs from "./NewAboutUs/NewAboutUs";
import Cart from "./pages/mycart/mycart";
import { Link } from "react-router-dom";
import SignIn from "./pages/forms/signin/signin";

// import { Link } from "react-router-dom";
const Navbar = () => {
  const [popOpen, setPopOpen] = useState(false);
  const [popOpenHead, setPopOpenHead] = useState(false);
  const [icons, setIcons] = useState(false);
  const [aboutUs, setAboutUs] = useState(false);
  const [cartPop, setCartPop] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  const openSignin = () => {
    setShowSignin(true);
  };
  const closeSignin = () => {
    setShowSignin(false);
  };

  const handlePopMenu = () => {
    setPopOpen(true);
    setIcons(true);
    setPopOpenHead(true);
  };

  const handlePopMenuClose = () => {
    setPopOpen(false);
    setIcons(false);
    setPopOpenHead(false);
  };

  const ToggleSidebar = () => {
    setCartPop(true);
  };

  return (
    <>
      {/* oreder */}

      {popOpen && (
        <div className="pop-all-itmes">
          <button>order now</button>
          <div className="pop-items">
            <AiOutlineHeart className="pop-img " />
            <IoBagHandleOutline className="pop-img" onClick={ToggleSidebar} />
          </div>
        </div>
      )}
      {/* oreder */}
      <div className="navbar">
        {icons && (
          <AiOutlineClose className="bar-icons" onClick={handlePopMenuClose} />
        )}
        {!icons && <FaBars className="bar-icons" onClick={handlePopMenu} />}
        {popOpen && (
          <div className=" phone-style">
            <div className="mt-2">
              <a href="/menu">OURMENU</a>
            </div>
            <div className="mt-2">
              <a href="/location">LOCATIONS</a>
            </div>
            <div className="mt-2">
              <a href="/About-us">ABOUT US</a>
              <MdKeyboardArrowDown className="arrow-down" />
            </div>
            <div className="mt-2">
            <Link to="/catering"> CATERING </Link> 
            </div>

            <div className="navbar-media-icons">
              <FaFacebook className="n-icon" />
              <FaInstagram className="n-icon" />
              <FaTwitter className="n-icon" />
              <FaPinterest className="n-icon" />
              <FaTiktok className="n-icon" />
            </div>
            <div>
              <img className="google-apple" src={googleapple} alt="" />
            </div>
          </div>
        )}

        <div className="navbar-left">
          <nav>
            <a href="/menu">OUR MENU</a>
            <a href="/location">
              {" "}
              LOCATIONS <MdKeyboardArrowDown />
            </a>
            <a href="#" onClick={() => setAboutUs((prev) => !prev)}>
              {" "}
              ABOUT US <MdKeyboardArrowDown />
              {aboutUs && (
                <div className="about-us">
                  <NewAboutUs />
                </div>
              )}
            </a>
            <a href="/catering">
              {" "}
              CATERING <MdKeyboardArrowDown />
            </a>
            {/* <div className="animation "></div> */}
          </nav>
        </div>
        <div className="sec-div">
          <a href="/">{!popOpen && <img src={logo} className="img2" />}</a>
        </div>

        <div className="third-div">
          <div onClick={openSignin} className="h-header-icon">
            <img src={login} className="img " alt="" />
            <p>
              Login or <br /> Register{" "}
            </p>
          </div>

          <div className="h-header-icon">
            <img src={favourite} className="img" alt="" />
          </div>

          <div className="h-header-icon">
            <img src={cart} className="img" alt="" onClick={ToggleSidebar} />
            <p>17.98 </p>
          </div>
        </div>

        {/* login */}
        {!popOpen && (
          <CiUser
            className="img logo-icons"
            // onClick={() => setSignIn((prev) => !prev)}
          />
        )}
        {popOpen && (
          <div className="sec-div" style={{ marginRight: "120px" }}>
            <img src={logo} className="img2" />
          </div>
        )}
      </div>

      <div className="Line"></div>

      {cartPop && <Cart />}

      {showSignin && <SignIn onClose={closeSignin} />}
    </>
  );
};

export default Navbar;
