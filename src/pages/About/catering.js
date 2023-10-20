import React from 'react'
import './catering.css';
import 'bootstrap/dist/css/bootstrap.css';
import catimage from "../../assets/Catering (Why order bellpepper ordering)-15.png";
import fresh from "../../assets/FRESH-06.svg";
import flexible from "../../assets/FLEXIBLE-06.svg";
import convenient from "../../assets/CONVENIENT-06.svg";


export default function Catering() {
    return (
        <div>
            <div className='col-lg-12 text-center p-5'>
                <div className='row text-center'>
                    <h1 className='cat-h1'>Catering is here to turn any <br></br>gathering more fun</h1>
                    <p className='cat-p1'>Whatever you’re planning, let us provide the food. Freshly made and safely <br></br>packaged catering tray for any occasions.</p>
                    <button className="cat-btn">PLACE A CATERING ORDER</button>
                </div>
            </div>

            <div className='col-lg-12 sec-body'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='col-div mt-5'>
                            <h1 className='cat-h1'>Why order Bell <br></br>Pepper catering?</h1>

                            <div className='inside-div mt-5'>
                                <div >
                                    <img src={fresh} className='cat-img' />
                                    <h6 className='cat-h6'>FRESH</h6>
                                    <p className='cat-p2'>Choose from a variety of
                                        yummy stir-fries, curries,
                                        noodle and fried rice. always
                                        cooked fresh to order..</p>
                                </div>
                                <div >
                                    <img src={flexible} className='cat-img' />
                                    <h6 className='cat-h6'>FLEXIBLE</h6>
                                    <p className='cat-p2'>Whether you need food right
                                        now, tomorrow or in two
                                        weeks, ordering online is a
                                        breeze.</p>
                                </div>
                                <div >
                                    <img src={convenient} className='cat-img' />
                                    <h6 className='cat-h6'>CONVENIENT</h6>
                                    <p className='cat-p2'>Place your order with just 40
                                        minutes notice and choose
                                        between pickup or delivery.
                                        Whatever works best.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img
                            src={catimage}
                            className="cateering-img" />
                    </div>
                </div>
            </div>

        </div>


    )
}


