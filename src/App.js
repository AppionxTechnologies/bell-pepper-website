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
import NewMenuListItem from "./pages/NewMenuListItem/NewMenuListItem";
import LunchMenu from "./pages/NewMenuListItemPages/LunchMenu";
import TakeOutMenu from "./pages/NewMenuListItemPages/TakeOutMenu";
import FootItem from "./pages/NewMenuListItemPages/FootItem";
// import { NewMenuListItem } from "./pages/NewMenuListItem/NewMenuListItem";



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
            <Route path="/menu"  element={<NewMenuListItem/>} />
            {/* <Route path='/lunch' element={<LunchMenu/>} />
            <Route path='/takeout' element={<TakeOutMenu/>} /> */}
            <Route path='/orderNow' element={<FootItem/>} />
            {/* <Route path="/menu-detail" element={<Menu_Detail />} /> */}
            {/* <Route path="/fotgetpassword" element={<ForgotPassword />} /> */}
            
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
            <Route path="/catering" element={<Catering />} />
            <Route path="/grow" element={<Grow />} />
            <Route path="/location" element={<Map />} />
            <Route path="/storelocation" element={<StoreLocation />} />



          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
