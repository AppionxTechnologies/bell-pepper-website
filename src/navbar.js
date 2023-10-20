import "bootstrap/dist/css/bootstrap.css";
import login from "./assets/login1.jpg";
import favourite from "./assets/favourite.jpg";
import cart from "./assets/cart-1.jpg";
import logo from "./assets/logo.svg";
import { FaBars   } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose,AiOutlineHeart } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import "./Navbar.css";
import { useState } from "react";
import SignIn from "./signin/signin";
import NewAboutUs from "./NewAboutUs/NewAboutUs";
import Cart from "./pages/mycart/mycart"

// import { Link } from "react-router-dom";
const Navbar = () => {

  const [popOpen,setPopOpen] = useState(false)
  const [popOpenHead,setPopOpenHead] = useState(false)
  const [icons,setIcons] = useState(false)

  const [signIn,setSignIn] = useState(false)
  const [aboutUs,setAboutUs] = useState(false)

  const [cartPop,setCartPop] = useState(false)
  
 
  const handlePopMenu = () =>{
    setPopOpen(true)
    setIcons(true)
    setPopOpenHead(true)
  }

  const handlePopMenuClose = () =>{
    setPopOpen(false)
    setIcons(false)
    setPopOpenHead(false)
  }

const ToggleSidebar= () =>{
  setCartPop(true)
}
 
  return (
    <>

    {/* oreder */}

   {popOpen && 
      <div className="pop-all-itmes">
           <button>order now</button>
           <div className="pop-items">
           <AiOutlineHeart className="pop-img "  />
           <IoBagHandleOutline className="pop-img"  />
           </div>
     </div>}

        {/* oreder */}

      <div className="navbar">
       {icons &&  <AiOutlineClose className="bar-icons" onClick={handlePopMenuClose}/> }
        {!icons &&<FaBars className="bar-icons" onClick={handlePopMenu}/>}
        { popOpen &&  <div className=" phone-style">
          <p>OURMENU</p>
          <p>LOCATIONS</p>
       <div>
        <p>ABOUT US</p>
           <MdKeyboardArrowDown className="arrow-down"/> 
       </div>
          <p>CATERING</p>
        </div>}

               <div className="navbar-left">
                            <nav>
                                <a href="/menu">OUR MENU</a>
                                <a href="#loaction"> LOCATIONS <MdKeyboardArrowDown/></a>
                                <a href="#" onClick={() => setAboutUs((prev) => !prev)}> ABOUT US <MdKeyboardArrowDown/> 
                                 { aboutUs &&  <div className="about-us" >
                                      <NewAboutUs />
                                  </div>}
                                </a>
                                <a href="#"> CATERING <MdKeyboardArrowDown/></a>
                                <div className="animation "></div>
                            </nav>
                   </div>
  <div className="sec-div">
  <a href="/">
{     !popOpen &&      <img src={logo} className="img2"  />}
</a>
        </div>

        <div className="third-div">
          <div className="h-header-icon" 
              onClick={() => setSignIn((prev)  => !prev)}>
            <img src={login} className="img " alt="" />
            <p>
              Login or <br /> Register{" "}
            </p>
          </div>

          <div className="h-header-icon">
            <img src={favourite} className="img" alt="" />
          </div>

          <div className="h-header-icon">
        
            <img src={cart} className="img" alt="" onClick={ToggleSidebar}/>
            <p>17.98 </p>
          </div>
        </div>


        {/* login */}
     {   !popOpen &&   <CiUser  className="img logo-icons"  onClick={() => setSignIn((prev) => !prev)}/>        }
     {  popOpen &&    <div className="sec-div" style={{marginRight:"120px"}}>
        <img src={logo} className="img2"   />
        </div>}

       
      </div>

      <div className="Line"></div>
  

     

 {/* signInPop */}
 {  
        signIn  && < SignIn/>
        }
        {/* signInPop */}

       {cartPop  && <Cart/>}


      
     
    
    </>
  );
};

export default Navbar;
