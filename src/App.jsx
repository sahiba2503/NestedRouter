

import React, { createContext } from "react";
import Navlist from "./Component/Navlist";
import RouterContainer from "./RouterContainer";

export const userContext = createContext();

function App() {
  const title = "hello sahiba";

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