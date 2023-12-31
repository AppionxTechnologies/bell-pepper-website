import React from 'react'
import { Link } from 'react-router-dom'
import './vertical-navbar.css'

export default function VerticalNavbar() {
  return (
    <>
          <div><h4 className='fw-bold vertical-myprofile-content  mb-4'>MY PROFILE</h4></div>
          <div className="vertical-navbar-left d-flex">
            <nav className='bar-links  d-flex '>
              <Link to="/accountdetails" className='text-decoration-none'>
                <p className='vertical-content fw-medium'>ACCOUNT DETAILS</p>
              </Link>
              <Link to="/orderhistory" className='text-decoration-none'>
                <p className='vertical-content fw-medium'>ORDER HISTORY</p>
              </Link>
              <Link to="/myaddress" className='text-decoration-none'>
                <p className='vertical-content fw-medium'>MY ADDRESSES</p>
              </Link>
            </nav>
          </div>
           <div className='vertical-navbar'></div>
    </>
  )
}

