import React,{useState} from "react";
import "./ordernowInvoice.css";
import { BsShop } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import crossicon from "../../assets/crossicon.png";
import verticaldotline from "../../assets/icons8-vertical-line-50.png";


export default function OrdernowInvoice() {
    const [isFormOpen, setIsFormOpen] = useState(true);
    const closeForm = () => {
      setIsFormOpen(false);
    };

    
  return (
    <>
      <div className={`invoice-ordernow ${isFormOpen ? "" : "hidden"}`}>
        <div className="invoice-container">
          <form>
            <div className="mt-1"><img className="cross-icon-invoice d-flex" src={crossicon} alt="" onClick={closeForm} /></div>
            <div className="ordernumber-heading mt-4 px-3 fw-semibold">
              <p>Order #1234</p>
            </div>
            <p className="px-3 Delivery-content">-Delivery</p>
            <div className="d-flex px-3">
              <div className="d-flex flex-column">
                <BsShop className="shop-icon" />
                <img className="vertical-lineimg" src={verticaldotline} alt="" />
              </div>
              <div className="shop-icon-content d-flex flex-column  mt-2">
                <p className="fw-semibold">Coolock</p>
                <p>Order on sep 25, 2023 2.30 pm</p>
              </div>
            </div>
            <div className="px-3 d-flex ">
                <BiHome className="shop-icon"/>
                <div className="home-icon-content d-flex flex-column px-2 mt-2">
                    <p className="fw-semibold">Home</p>
                    <p>North street</p>
                    <p>mahalide road</p>
                    <p>Dublin</p>
                </div>
            </div>
            <div className="hrdiv"><hr className="invoice-hrline"/></div>
            <div className="text-center your-order-completed">
                <p>Your order has been successfully completed.</p>
            </div>
            <div className="hrdiv"><hr className="invoice-hrline"/></div>
            <div className="row px-3 one-item-content">
                <p className="fw-semibold">1 item</p>
            </div>
            <div className=" d-flex px-3 justify-content-between number-of-items">
                <div>
                    <p>Crispy Chicken(L)</p>
                </div>
                <div>
                    <p>x2</p>
                </div>
                <div>
                    <p>&#8364;17.98</p>
                </div>
            </div>
            <div className="hrdiv"><hr className="invoice-hrline"/></div>
            <div className="d-flex px-3 justify-content-between invoice-subtotal ">
                <div>
                    <p>Subtotal</p>
                    <p>Tax</p>
                </div>
                <div>
                    <p>&#8364;17.98</p>
                    <p>&#8364;00.00</p>
                </div>
            </div>
            <div className="hrdiv"><hr className="invoice-hrline"/></div>
            <div className="d-flex px-3 justify-content-between invoice-total ">
                <div>
                    <p className="fw-semibold">Total</p>
                </div>
                <div>
                    <p className="fw-semibold">&#8364;17.98</p>
                </div>
            </div>
            <div className="hrdiv-total"><hr className="invoice-hrline"/></div>


          </form>
        </div>
      </div>
    </>
  );
}
