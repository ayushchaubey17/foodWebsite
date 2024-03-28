import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import NavPhone from './NavPhone'

import Divider from '@mui/material/Divider';





export default function Header() {


   

  return (
    <div >

    <div className="phone sm:hidden">
        <NavPhone/>
    </div>

     <div className="hidden sm:block"><Nav/></div>
     <Divider />
     <Divider />

     
    
     
  
     
    </div>
  )
}
