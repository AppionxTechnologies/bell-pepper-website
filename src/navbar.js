import "bootstrap/dist/css/bootstrap.css";
import login from "./assets/login1.jpg";
import favourite from "./assets/favourite.jpg";
import cart from "./assets/cart-1.jpg";
import logo from "./assets/logo.svg";

import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="first-div">
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
            <img src={login} className="img" alt="" />
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
      </div>
    </>
  );
};

export default Navbar;
