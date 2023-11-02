import React from 'react'
import './storelocation.css'
import restaurantimg from '../../assets/bellepepper-restaurantimg.jpg'
import SearchIcon from '@mui/icons-material/Search';

export default function StoreLocation() {
  return (
    <>
            <div className='col-lg-12 store-location'>
                <div className='row first-row'>
                    <div className='col-lg-10 mt-4 mb-4'>
                        <p className='fs-2 fw-bold'>Bell Pepper Coolock</p>
                        <p className='fs-6 mt-3'>Looking for another location?</p>
                        <div className='px-4'><input className='text-input mt-3 ' type='text' placeholder='Enter your area, country or town'/><button className="search-button" type='button'><SearchIcon  sx={{ fontSize: "16px" }}/></button></div>
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
                <div className='map-img px-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.89189979591322!2d-6.201366387579915!3d53.38719888465029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670fc408aca893%3A0xbc3e59290625252c!2sBell%20Pepper!5e0!3m2!1sen!2sin!4v1698591494611!5m2!1sen!2sin"></iframe>
                </div>
            </div>
    </>
  )
}
