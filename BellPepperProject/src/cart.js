import React, { useState } from "react";
import './cart.css';
import "bootstrap/dist/css/bootstrap.min.css"


const  Cart = () => {
    return(
        <>
              <div className="transparant">
                <div className="blur">
                    left
                </div>
                <div className="sidebar">
                    <div className="bg-white">
                        <p className="text-center title">MY CART</p>
                        <div className="d-flex justify-content-around pickup pt-2">
                        <h6>Pickup from Coolock</h6>
                        <h6>Change</h6>
                        </div>
                        <div>
                        
                        </div>
                    </div>
                    
                </div>
              </div>
        </>
    )
}

export default Cart;