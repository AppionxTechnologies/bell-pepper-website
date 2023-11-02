import React from 'react'
import './cancelmsg.css'
import close from '../../assets/close.png'
export default function CancelMsg() {
    return (
        <div className="cancelmsg ">
          <div className="cancelcontainer">
            <form>
                <div className="close"><img src={close} alt=''/></div>
                <h2 className='messages'>Your order has been cancelled</h2>
                <p className='paracontent'>Your order number is #1234</p>
                <button className="tryagain" type="button">
                    TRY AGAIN
                </button>
            </form>
          </div>
        </div>
      );
    } 
    