import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./navbar";
import Footer from "./footer";

import Allergen from "./pages/About/allergen";
import Kitchen from "./pages/About/kitchen";
import Makeorder from "./pages/About/makeorder";
import Catering from "./pages/About/catering";
import Grow from "./pages/About/grow";

import Orderonline from "./pages/order online/orderonline";
import OrderConfirm from "./pages/order online/orderconfirm";
import CompleteYourOrder from "./pages/completeyourorder/completeyourorder";
import SuccessMsg from "./pages/completeyourorder/successmsg";
import CancelMsg from "./pages/completeyourorder/cancelmsg";
import Map from "./pages/map/map"
import StoreLocation from "./pages/map/storelocation";
import NewAboutUs from "./NewAboutUs/NewAboutUs";
<<<<<<< HEAD
import NewMenuListItem from "./pages/NewMenuListItem/NewMenuListItem";
import LunchMenu from "./pages/NewMenuListItemPages/LunchMenu";
import TakeOutMenu from "./pages/NewMenuListItemPages/TakeOutMenu";
import FootItem from "./pages/NewMenuListItemPages/FootItem";
import CateringTray from "./pages/cattering/cattering-tray";
import Tray from "./pages/cattering/tray";
// import { NewMenuListItem } from "./pages/NewMenuListItem/NewMenuListItem";
=======

import AccountDetails from "./pages/My profile/accountdetails";
import OrderHistory from "./pages/My profile/orderhistory";
import VerticalNavbar from "./pages/My profile/vertical-navbar";
import Myaddress from "./pages/My profile/myaddress";


>>>>>>> c5d5e93836118272ca5197d236291d55283cf54c

// import ForgotPassword from './signin/forgotpassword/forgotpassword/forgotpwd';
function App() { 
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <div className=""></div>
          <Routes>
            <Route path="/" element={<Home />} />
<<<<<<< HEAD
            <Route path="/menu"  element={<NewMenuListItem/>} />
            {/* <Route path='/lunch' element={<LunchMenu/>} />
            <Route path='/takeout' element={<TakeOutMenu/>} /> */}
            <Route path='/orderNow' element={<FootItem/>} />
            <Route path='/orderNow1' element={<Tray/>} />
            {/* <Route path="/menu-detail" element={<Menu_Detail />} /> */}
            {/* <Route path="/fotgetpassword" element={<ForgotPassword />} /> */}
=======
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu-detail" element={<Menu_Detail />} />
>>>>>>> c5d5e93836118272ca5197d236291d55283cf54c
            
            <Route path="/aboutus" element={<NewAboutUs />} />

            {/* <Route path="/catering-menu" element={<Catering_Menu />} /> */}
            <Route path="/completeorder" element={<CompleteYourOrder />} />
            <Route path="/success" element={<SuccessMsg />} />
            <Route path="/cancel" element={<CancelMsg />} />
            <Route path="/orderonline" element={<Orderonline />} />
            <Route path="/order" element={<OrderConfirm />} />
            <Route path="/allergen" element={<Allergen />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/makeorder" element={<Makeorder />} />
            <Route path="/catering" element={<CateringTray/>} />
            <Route path="/grow" element={<Grow />} />
            <Route path="/location" element={<Map />} />
            <Route path="/storelocation" element={<StoreLocation />} />

            <Route path="/verticalnavbar" element={<VerticalNavbar />} />
            <Route path="/accountdetails" element={<AccountDetails />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/myaddress" element={<Myaddress/>}/>




          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
