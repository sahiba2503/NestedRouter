import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import SideNavbar from "./Component/SideNavbar";

import Welcome from "./Welcome";
import FeaturedServices from "./FeaturedServices";
import HeroSection from "./HeroSection";

function RouterContainer() {
  return (
    <div className='routerContainer'>
      <SideNavbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HeroSection />} />

          <Route path='heroSection' element={<HeroSection />} />
          <Route path='welcome' element={<Welcome />} />
          <Route path='featuredServices' element={<FeaturedServices />} />
        </Route>

        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default RouterContainer;
