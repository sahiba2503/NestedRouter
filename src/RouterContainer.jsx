import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

function RouterContainer() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/About" element = {<About/>}></Route>
        <Route path = "/Contact" element = {<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default RouterContainer
