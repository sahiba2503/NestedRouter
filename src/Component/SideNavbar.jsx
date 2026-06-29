import React from 'react'
import {useNavigate} from "react-router-dom"

function SideNavbar() {
    let navigate = useNavigate();
  return (
    <div className='sideNavList'>
      <ul>
        <li onClick={()=>{ navigate("/aaa") }}>aaaaaaaaaaaaaaa</li>
        <li onClick={()=>{ navigate("/bbb") }}>bbbbbbbbbbbbbb</li>
        <li onClick={()=>{ navigate("/ccc") }}>ccccccccccccccc</li>
      </ul>
    </div>
  )
}

export default SideNavbar
