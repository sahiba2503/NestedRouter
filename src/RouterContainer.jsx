

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

import SideNavbar from "./Component/SideNavbar";

import HeroSection from "./HeroSection";
import Welcome from "./Welcome";
import FeaturedServices from "./FeaturedServices";
import { Navigate } from "react-router-dom";
import Email from "./Component/Email";
import Profile from "./Component/Profile";

function RouterContainer() {
  return (
    <div className="routerContainer">
      <SideNavbar />

      <Routes>

        <Route path="/Home" element={<Home />}>          
          <Route index element={<Navigate to="HeroSection" replace/>} />

          <Route path="HeroSection" element={<HeroSection />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="featuredServices" element={<FeaturedServices />} />
        </Route>

<Route path="/About" element={<About />}>
    <Route index element={<Navigate to="Profile" replace />} />
    <Route path="Profile" element={<Profile />} />
</Route>

<Route path="/Contact" element={<Contact />}>
    <Route index element={<Navigate to="Email" replace />} />
    <Route path="Email" element={<Email />} />
</Route>        


      </Routes>
    </div>
  );
}

export default RouterContainer;

{/* <Route path="/About" element={<About />} >
        <Route index element={<Navigate to="/About/Profile"/>} />
        <Route path="Profile" element={<Profile/>}/>
       </Route>

        <Route path="/Contact" element={<Contact />} >
        <Route index element={<Navigate to="/Contact/Email"/>} />
        <Route path="Email" element={<Email/>}/> */}
