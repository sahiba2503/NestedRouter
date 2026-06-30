import React from 'react'
import {useNavigate} from "react-router-dom"

function SideNavbar() {
    let navigate = useNavigate();
  return (
    <div className='sideNavList'>
      <ul>
        <li onClick={()=>{ navigate("/aaa") }}>aaaaaa</li>
        <li onClick={()=>{ navigate("/bbb") }}>bbbbbb</li>
        <li onClick={()=>{ navigate("/ccc") }}>cccccc</li>
      </ul>
    </div>
  )
}

export default SideNavbar
