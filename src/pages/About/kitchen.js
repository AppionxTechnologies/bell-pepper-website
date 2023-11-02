
import React from 'react'
import './kitchen.css';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../../assets/Our Story (Your kitchen away from home)-15.png';
import img2 from '../../assets/Grow with us-15.png';
import img3 from '../../assets/Our Story (inside the kitchen)-15.png';
export default function kitchen() {
    return (
        <div className='body'>
                <div className='col-lg-12 body-div'>
                    <div className='row'>
                        <div className='col-lg-6 '>
                            <div className='left-cont mt-5'>
                                <h1 className='kit-h1 '>Your kitchenaway from home</h1>
                                <p className='kit-p1'>We’re in the business of feedingpeople, and we’re out tochange what that means.</p>
                            </div>
                        </div> 
                        <div className='col-lg-6 '> 
                            <img
                                src={img1}
                                className="kitchen-img1" />
                        </div>
                    </div>
                </div>

                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-6 img-div'>

                            <img
                                src={img2}
                                className="kitchen-img3" />

                        </div>

                        <div className='col-lg-6'>
                            <h1 className='kit-h1 '>Your kitchenaway from home</h1>
                            <p className='kit-p1'>Since our humble beginnings in 2017, our guests have
                                always been the most important ingredient at Bell Pepper.
                                Your love and support have helped us grow from a single
                                takeaway restaurant in Coolock, Dublin to 3 locations
                                currently in Dublin & Waterford.</p>

                            <p className='kit-p1'>While not every Bell Pepper looks the same right now, you
                                will find that each one works and runs with one common
                                belief in mind: our food has the power to fuel all our lives..</p>

                        </div>
                    </div>
                </div>

                <div className='col-lg-12 kitchen-div'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='col-div1'>
                                <h1 className='kit-h1 '> Inside the kitchen</h1>
                                <p className='kit-p1'>With over 50 fresh & healthy menu choices, we
                                    give you the freedom to customize your mains
                                    the way you like so you can eat, feel and live the
                                    way you want.</p>
                                <div className='inside-div'>
                                    <div >
                                        <h6 className='kit-h6'>Honest Ingredients</h6>
                                        <p className='kit-p2'>We only source
                                            our ingredients
                                            from people we trust.</p>
                                    </div>
                                    <div >
                                        <h6 className='kit-h6'>Spotless Environment</h6>
                                        <p className='kit-p2'>We believe clean
                                            eating starts with
                                            a clean kitchen..</p>
                                    </div>
                                    <div >
                                        <h6 className='kit-h6'>Helping Hands</h6>
                                        <p className='kit-p2  '>Building healthier communities
                                            by connecting people
                                            to real food..</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img
                                src={img3}
                                className="kitchen-img2" />
                        </div>
                    </div>
                </div>

        </div>

    )
}
