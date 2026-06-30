import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import SideNavbar from './Component/SideNavbar';
import HomeListItemA from "./Component/HomeListItemA"
import HomeListItemB from "./Component/HomeListItemB"
import HomeListItemC from "./Component/HomeListItemC"


function RouterContainer() {
  return (
    <div className='routerContainer'>
      <SideNavbar />
      <Routes>
        <Route path = "/" element = {<Home/>}>
        <Route index element={<HomeListItemA/>} />

        <Route path = "aaa" element = {<HomeListItemA/>}/>
        <Route path = "bbb" element = {<HomeListItemB/>}/>
        <Route path = "ccc" element = {<HomeListItemC/>}/>       
        </Route>

        <Route path = "/About" element = {<About/>}></Route>
        <Route path = "/Contact" element = {<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default RouterContainer



