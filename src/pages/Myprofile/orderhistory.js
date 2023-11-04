import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './accountdetails.css';
import 'font-awesome/css/font-awesome.min.css';
// import logoutrej from "./assets-1/logoutrej.svg";
// import delete1 from "./assets-1/delete1.svg";
import "./orderhistory.css";
import food from "./food.png";
// import VerticalTab from "./components/VerticalTab";


function App2() {

    return (
        <>


            <div className="profile-details col-lg-9  Rightbox text-start ">

                <div className="rightSide-details">
                    <h1>MY PROFILE</h1>
                    <h5> ORDER HISTORY</h5>

                    <div className='ff-1'>
                        <img src={food} className="pic1 text-center" alt="" style={{ width: '16%', height: '23%' }} />
                        <div className="ch-1">
                            <div className='adj-1'>
                                <h5>Crispy Chicken(L) </h5>
                                <button type="button" class="bt-1 btn btn-success py-0" >Completed</button>
                            </div>

                            <h6>Order #1234 <br /> Sep 25, 2023 2.30 pm</h6>
                            <div className="but-1" >
                                <button type="button" class="btn btn-success" >Reorder</button>
                                <button type="button" class="btn btn-success" >View details</button>
                            </div>
                        </div>
                    </div>


                    <hr className="bar-2 my-4 border-2" />

                    <div className='ff-2'>
                        <img src={food} className="pic1" alt="" style={{ width: '16%', height: '23%' }} />
                        <div className="ch-2">
                            <div className='adj-2'>
                                <h5>Chilli & Cashew (L) </h5>
                                <button className="btn-1" type="button" class="bt-1 btn btn-success py-0" >Completed</button>
                            </div>

                            <h6>Order #1235 <br /> Sep 26, 2023 4.00 pm</h6>
                            <div className="but-2" >
                                <button type="button" class="btn btn-success" >Reorder</button>
                                <button type="button" class="btn btn-success" >View details</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="lb-1 text-center">order #1234</p>
                        <br />

                    </div>
                    <div>
                        <p className="lb-2 text-center"> <a href="" >order now</a></p>

                    </div>
                </div>
            </div>

        </>
    )
}
export default App2;
