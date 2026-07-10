import React, { createContext } from "react";
import Navlist from "./Component/Navlist";
import RouterContainer from "./RouterContainer";
import {useEffect} from "react"
export const userContext = createContext();

function App() {
  const title = "hello sahiba";
  
  useEffect(() => {
  alert("Do you really want to open?");
}, []);
  

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
