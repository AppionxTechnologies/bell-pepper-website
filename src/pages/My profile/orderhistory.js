import React,{useState} from 'react'
import './orderhistory.css'
import CrispyImg from "../../assets/crispyimg.png";
import VerticalNavbar from './vertical-navbar'
import OrdernowInvoice from '../order online/ordernowInvoice';


export default function OrderHistory() {
  const [ShowInvoice, setShowInvoice] = useState(false);

    const openInvoice = () => {
        setShowInvoice(true);
    };
    const closeInvoice = () => {
        setShowInvoice(false);
    };

  return (
    <>
      <div className='col-lg-12'>
        <div className='row mt-4'>
          <div className='col-lg-3 mt-3'>
            <VerticalNavbar/>
          </div>
          <div className='col-lg-9 mt-3'>
            <p className="fs-3 fw-bold ">MY PROFILE</p>
            <p className="fw-bold">ORDER HISTORY</p>

            <div className='row'>
              <div className='col-lg-10 imagerow1 d-flex  '>
                <img className="crispyimg1" src={CrispyImg} alt=''/>
                  <div className='px-4'>
                    <h6 className='fw-bold mb-3'>Crispy Chicken(L)</h6>
                    <p>Order #1234</p>
                    <p>Sep 25, 2023 2.30 pm</p>
                    <div className='imagerow1-btn'>
                      <button className="imagerow1-button fw-medium mt-4" type='button'>Reorder</button>
                      <button className="imagerow1-button fw-medium mt-4" type='button'>View Details</button>
                    </div>
                </div>
              </div>
              <div className='col-lg-2 sidebutton'>
                  <button className='imagerow1-button-top' type='button'>Completed</button>
                  <p className='px-5 mt-4 fw-bold amount-content'>17.98</p>
              </div>
            </div>

            <hr className='orderhistory-hrline'/>

            <div className='row'>
              <div className='col-lg-10 imagerow1 d-flex  '>
                <img className="crispyimg1" src={CrispyImg} alt=''/>
                <div className='px-4'>
                  <h6 className='fw-bold mb-3'>Chilli & Cashew (L)</h6>
                  <p>Order #1235</p>
                  <p>Sep 26, 2023 4.00 pm</p>
                  <div className='imagerow1-btn'>
                    <button className="imagerow1-button fw-medium mt-4" type='button'>Reorder</button>
                    <button className="imagerow1-button fw-medium mt-4" type='button'>View Details</button>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 sidebutton'>
                  <button className='imagerow1-button-top' type='button'>Completed</button>
                  <p className='px-5 mt-4 fw-bold amount-content'>17.98</p>
              </div>
            </div>

            <div className='order-number fw-medium py-5'>
              <p>Order #1234</p>
            </div>
            <div className='row'>
              <div className='col-lg-12 py-3 mt-3 ordernow-content text-center'>
                <p className='fw-semibold' onClick={ShowInvoice ? closeInvoice : openInvoice}>Order now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {ShowInvoice && <OrdernowInvoice onClose={closeInvoice} />}

    </>
  )
}


