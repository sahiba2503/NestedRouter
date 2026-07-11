import React, { createContext } from "react";
import Navlist from "./Component/Navlist";
import RouterContainer from "./RouterContainer";
import {useEffect} from "react"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const userContext = createContext();

function App() {
  const title = "hello sahiba";
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(()=>{
    if(location.pathname.endsWith("/"))
      navigate("Home");
    },[location.pathname, navigate]  )
  
 

  return (
    <div>
      <userContext.Provider value={title}>
        <Navlist />
        <RouterContainer />
      </userContext.Provider>
    </div>
  );
}

export default App;
