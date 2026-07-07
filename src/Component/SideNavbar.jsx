// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function SideNavbar() {
//   const  {pathname } = useLocation();
//   const navigate = useNavigate();

//   let list = [];

//  if (pathname.startsWith("/Home")) {
//     list = ["heroSection", "welcome", "featuredServices"];
//   }
//   else if (pathname.startsWith("/Contact")) {
//     list = ["Email", "Phone", "Support"];
//   }
//   else if (pathname.startsWith("/About")) {
//     list = ["Profile", "Settings", "History"];
//   }

//   return (
//     <div>
//       <ul>
//         {list.map((item, index) => (
//           <li
//             key={index}
//             onClick={() => navigate(item)}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SideNavbar;

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function SideNavbar() {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();

//   let list = [];

//   if (pathname.startsWith("/Home")) {
//     list = ["heroSection", "welcome", "featuredServices"];
//   } else if (pathname.startsWith("/About")) {
//     list = ["Profile", "Settings", "History"];
//   } else if (pathname.startsWith("/Contact")) {
//     list = ["Email", "Phone", "Support"];
//   }

//   // Get parent route (Home, About, Contact)
//   const parentPath = pathname.split("/")[1];

//   return (
//     <div>
//       <ul>
//         {list.map((item, index) => (
//           <li
//             key={index}
//             onClick={() => navigate(`/${parentPath}/${item}`)}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SideNavbar;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideNavbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let list = [];
  let parentPath = "";

  if (pathname.startsWith("/Home")) {
    parentPath = "/Home";
    list = ["heroSection", "welcome", "featuredServices"];
  } else if (pathname.startsWith("/About")) {
    parentPath = "/About";
    list = ["Profile", "Settings", "History"];
  } else if (pathname.startsWith("/Contact")) {
    parentPath = "/Contact";
    list = ["Email", "Phone", "Support"];
  }

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item} onClick={() => navigate(`${parentPath}/${item}`)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNavbar;
