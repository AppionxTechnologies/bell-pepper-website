import React from 'react'
import './storelocation.css'
import restaurantimg from '../../assets/bellepepper-hotelimg.jpeg'

export default function StoreLocation() {
  return (
    <>
            <div className='col-lg-12'>
                <div className='row first-row'>
                    <div className='col-lg-10 mt-4 mb-4'>
                        <p className='fs-2 fw-bold'>Bell Pepper Coolock</p>
                        <p className='fs-6 mt-3'>Looking for another location?</p>
                        <div className='px-4'><input className='text-input mt-3 ' type='text' placeholder='Enter your area, country or town'/></div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='px-3'><button className='btnbtn-order' type='button'>Order Online</button></div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-6">
                        <p className='fw-semibold common-topic mt-4'>Bell Pepper Coolock offers Collection, Delivery & Dine-in</p>
                        <div className='fw-bold subtopics mb-4'>
                            <p> Bell Pepper Coolock</p>
                            <p>Unit 3, central park</p>
                            <p>Coolock Village, Co. Dublin</p>
                            <p>D05FF08</p>
                        </div>
                            <p className='fs-5 fw-bold'>Phone</p>
                        <div className='subtopics mb-4'>
                            <p>018770088</p>
                        </div>
                            <p className='fs-5 fw-bold'>Opening Hours</p>
                        <div className='subtopics mb-4'>
                            <p><span>Monday to Sunday:</span> 12:00 - 23:00</p>
                        </div>
                        
                            <p className='fs-5 fw-bold'>Services</p>
                        <div className='subtopics mb-4'>
                                <p><span>Takeout, Collection , Delivery & Dine-in</span></p>
                        </div>
                        
                            <p className='fs-5 fw-bold'>Areas served</p>
                        <div className='subtopics'>
                            <p>Clontarf, Raheny, Killester, Artane, Beaumont, Coolock,</p>
                            <p>Edenmore, Kilbarrack, Harmonstown, Charlemont, Donneycarney,</p>
                            <p>Collinswood, Dollymount, Clarehall, Bonnybrook, Ard Na Greine,</p>
                            <p>Clongriffon, The Donahies, Belmayne, Donaghmede, Tonlegee Road,</p>
                            <p>Ayrfield, Grange Abbey, The Coast, Red Arches & Baldoyle</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className='restaurant-img' src={restaurantimg} alt=''/>
                    </div>

                </div>
            </div>
    </>
  )
}
