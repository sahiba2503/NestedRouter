// // import React from 'react'
// // import { createContext,useContext } from 'react'
// // import {userContext} from "./App.jsx";
// // function HomeListItemA() {
// //    const user = useContext(userContext)
// //   return (
// //     <div>
// //       <h2>Title - {user} </h2>
// //       home list item aaaa
// //     </div>
// //   )
// // }

// // export default HomeListItemA

// import React, { useContext } from "react";
// import { userContext } from "./App";

// function HomeListItemA() {
//   const user = useContext(userContext);

//   return (
//     <div>
//       <h2>Title - {user}</h2>
//       home list item aaaa
//     </div>
//   );
// }

// export default HomeListItemA;

import React, { useContext } from "react";
import { userContext } from "../App";

function HomeListItemA() {
  const user = useContext(userContext);

  return (
    <div>
      <h2>Title - {user}</h2>
      <p>Home List Item A</p>
    </div>
  );
}

export default HomeListItemA;