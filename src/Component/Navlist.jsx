

import React from "react";
import { useNavigate } from "react-router-dom";

function Navlist() {
  const navigate = useNavigate();

  return (
    <div className="navList">
      <span onClick={() => navigate("/Home")}>Home</span>

      <span onClick={() => navigate("/About")}>About</span>

      <span onClick={() => navigate("/Contact")}>Contact</span>
    </div>
  );
}

export default Navlist;