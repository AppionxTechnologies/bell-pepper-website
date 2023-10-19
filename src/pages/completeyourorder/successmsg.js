import React from 'react'
import './successmsg.css'
import tick from '../../assets/tick.png'

export default function SuccessMsg() {
    return (
        <div className="successmsg ">
          <div className="successcontainer">
            <form>
                <div className="tick"><img src={tick} alt=''/></div>
                <h2 className='message'>Your order successfully placed</h2>
                <p className='textcontent'>Your order number is #1234</p>
                <button className="vieworder" type="button">
                    VIEW ORDER
                </button>
            </form>
          </div>
        </div>
      );
    }
    