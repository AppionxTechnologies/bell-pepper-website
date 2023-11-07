import {React, useState} from 'react'
import VerticalNavbar from './vertical-navbar'
import homeicon from '../../assets/homeicon.png'
import './myaddress.css'
import OrderConfirm from '../order online/orderconfirm';

export default function Myaddress() {
  const [ShowMyaddress, setShowMyaddress] = useState(false);

  const openMyaddress = () => {
    setShowMyaddress(true);
  };
  const closeMyaddress = () => {
    setShowMyaddress(false);
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
                <p className="fw-bold">MY ADDRESS</p>
                <div className='row'>
                    <div className='col-lg-8 bg-white home-address'>
                        <p className='homeicon-content fw-semibold px-3'><img className='home-icon-myaddress' src={homeicon} alt=''/>HOME</p>
                        <div className='homeicon-address px-5'>
                            <p>Unit 3, Associated Rewinds (Ireland), Whitestown Drive</p>
                            <p>Tallaght, South Dublin.</p>
                            <p>D05FF08</p>
                        </div>
                        <div className='myaddress-btn'>
                            <button className="myaddress-button fw-semibold mt-2" type='button'>EDIT</button>
                            <button className="myaddress-button fw-semibold  mt-2" type='button'>DELETE</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 mt-3 add-address-content text-center'>
                        <p className='fw-semibold' onClick={ShowMyaddress ? closeMyaddress : openMyaddress}>ADD ADDRESS</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          {ShowMyaddress && <OrderConfirm onClose={closeMyaddress} />}
        </>
      )
}
