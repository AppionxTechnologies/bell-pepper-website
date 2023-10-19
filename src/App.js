import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Menu from "./pages/Menu/lunchbox";
import Navbar from "./navbar";
import Footer from "./footer";
import Allergen from "./pages/cms/allergen";
import Kitchen from "./pages/cms/kitchen";
import Makeorder1 from "./pages/cms/makeorde1";
import Catering from "./pages/cms/catering";
import Orderonline from "./pages/order online/orderonline";
import OrderConfirm from "./pages/order online/orderconfirm";
import CompleteYourOrder from "./pages/completeyourorder/completeyourorder";
import SuccessMsg from "./pages/completeyourorder/successmsg";
import CancelMsg from "./pages/completeyourorder/cancelmsg";


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
            <Route path="/menu" element={<Menu />} />
            {/* <Route path="/fotgetpassword" element={<ForgotPassword />} /> */}
            <Route path="/allergen" element={<Allergen />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/makeorde1" element={<Makeorder1 />} />
            <Route path="/catering" element={<Catering />} />

            <Route path="/completeorder" element={<CompleteYourOrder />} />
            <Route path="/success" element={<SuccessMsg />} />
            <Route path="/cancel" element={<CancelMsg />} />
            <Route path="/orderonline" element={<Orderonline />} />
            <Route path="/order" element={<OrderConfirm />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
