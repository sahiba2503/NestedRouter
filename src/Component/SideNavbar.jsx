

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
  } 
  else if (pathname.startsWith("/About")) {
    parentPath = "/About";
    list = ["Profile", "Settings", "History"];
  }
   else if (pathname.startsWith("/Contact")) {
    parentPath = "/Contact";
    list = ["Email", "Phone", "Support"];
  }

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item} onClick={() => navigate(`${parentPath}/${item}`)}
          className={location.pathname.endsWith(item) ? "active-link" : "link"}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNavbar;
