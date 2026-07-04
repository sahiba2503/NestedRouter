import React, { useState, useContext } from "react";
import { userContext } from "../App";

function HomeListItemA() {
  const user = useContext(userContext);

  const [name, setName] = useState([
    { id: 1, name: "sahiba" },
    { id: 2, name: "sana" },
    { id: 3, name: "samama" },
  ]);
  function updateName(key) {
    const updatedNameList = name.map((val) => {
      if (val.id === key) {
        return {
          id: val.id,
          name: "madam",
        };
      } else {
        return val;
      }
    });
    setName(updatedNameList);
  }

  return (
    <div>
      <h2>User Name</h2>

      {name.map((value) => (
        <div key={value.id} onClick={() => updateName(value.id)}>
          {value.name}
        </div>
      ))}
      <p>Update Name</p>

      <button>Update User Name</button>
    </div>
  );
}

export default HomeListItemA;
