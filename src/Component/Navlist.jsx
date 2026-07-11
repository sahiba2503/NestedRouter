

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navlist() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navList">
      <span
        onClick={() => navigate("/Home")}
        className={location.pathname.includes("/Home") ? "active-link" : "link"}
      >
        Home
      </span>

      <span
        onClick={() => navigate("/About")}
        className={location.pathname.includes("/About") ? "active-link" : "link"}
      >
        About
      </span>

      <span
        onClick={() => navigate("/Contact")}
        className={location.pathname.includes("/Contact") ? "active-link" : "link"}
      >
        Contact
      </span>
    </div>
  );
}

export default Navlist;