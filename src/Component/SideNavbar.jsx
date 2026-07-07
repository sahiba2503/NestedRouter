// import React from "react";
// import { useNavigate } from "react-router-dom";

// function SideNavbar() {
//   let navigate = useNavigate();
//   return (
//     <div className='sideNavList'>
//       <ul>
//         <li
//           onClick={() => {
//             navigate("/heroSection");
//           }}
//         >
//           heroSection
//         </li>
//         <li
//           onClick={() => {
//             navigate("/welcome");
//           }}
//         >
//           welcome
//         </li>
//         <li
//           onClick={() => {
//             navigate("/featuredServices");
//           }}
//         >
//           featuredServices
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default SideNavbar;
import React from 'react'
import {useLocation} from "react-router-dom";

function SideNavbar() {
  const pathname = useLocation();
  let list = [];
  if(pathname === "/"){
    list = ["Company","Mission","Team"];
  }
  else if(pathname === "/Contact"){
    list = ["Emial", "hPone", "Support"];
  }
  else if(pathname === "/About"){
    list = ["Profile", "Settings","History"];
  }
  return (
    <div>
      <ul>
{list.map((item,index)=>(
  <li key={index}>{item}</li>
))}
      </ul>
    </div>
  )
}

export default SideNavbar
