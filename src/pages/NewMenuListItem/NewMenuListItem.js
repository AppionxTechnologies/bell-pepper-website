import React from 'react'
import './NewMenuListItem.css'
import { Link } from 'react-router-dom'
import LunchMenu from '../NewMenuListItemPages/LunchMenu'
import { useState } from 'react'
import TakeOutMenu from '../NewMenuListItemPages/TakeOutMenu'

const NewMenuListItem = () => {

  const [lunchMenu,setLunchMenu] = useState(true)
  const [takeOutClickPop,setTakeOutClickPop] = useState(false)
  const LunchMemuClick = () =>{
    setLunchMenu(true)
    setTakeOutClickPop(false)
  }
  const TakeOutClick = () =>{
    setTakeOutClickPop(true)
    setLunchMenu(false)
  }
  return (
    <div> 
<div className="NewMenuListItem">
          <div className="NewMenuListItem-left">
                            <nav>

                            <p  onClick={LunchMemuClick}>LUNCH BOX</p>
                            <p onClick={TakeOutClick}>TAKEOUT</p>
                             <p>MEAL DEALS</p>
                            <p className='hidden'>SPECIAL&VALUE MEALS</p>
                           
                            <div className="animation "></div>
                            </nav>
                   </div>
                 
      <div className="hrline "></div>

 { lunchMenu &&    <LunchMenu/>}
 { takeOutClickPop && <TakeOutMenu/>}
 </div>
    </div>
  )
}

export default NewMenuListItem;