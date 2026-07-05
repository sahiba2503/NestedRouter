import React from 'react'
import {useNavigate} from "react-router-dom"

function SideNavbar() {
    let navigate = useNavigate();
  return (
    <div className='sideNavList'>
      <ul>
        <li onClick={()=>{ navigate("/heroSection") }}>heroSection</li>
        <li onClick={()=>{ navigate("/welcome") }}>welcome</li>
        <li onClick={()=>{ navigate("/featuredServices") }}>featuredServices</li>
      </ul>
    </div>
  )
}

export default SideNavbar
