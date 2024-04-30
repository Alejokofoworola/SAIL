import React from 'react'
import {Outlet} from 'react-router-dom'
import SideNav from './Component'
import "./mainLayout.css"


const mainLayout=()=>{
  return (
    <div id='layout'> 
    <div id='sideNav'>
      <SideNav/>

    </div>
    <div id='display'></div>
    <Outlet/>
    </div>
  )
}

export default mainLayout