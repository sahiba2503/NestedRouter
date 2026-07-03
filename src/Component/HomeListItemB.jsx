import style from "./HomeListItemB.module.css";
import React from "react";
import { useState } from "react";

function HomeListItemB() {
  let [details, setDetails] = useState([
    { id: 1, name: "sahiba", job: "A" },
    { id: 2, name: "sana", job: "B" },
    { id: 3, name: "sama", job: "C" },
  ]);

  let [details2, setDetails2] = useState([
    { id: 1, name: "name1" },
    { id: 2, name: "name2" },
    { id: 3, name: "name3" },
  ]);

  let updateData = () => {
    let newDetails = details.map((detail, i) => {
      return { ...detail, name: "newName" };
      // or  return {
      //   id: detail.id,
      //   name: "newName",
      // };
      //or
      // setDetails([
      //details[0],
      //{ id: 2, name: "New Name" },
      //details[2]
      //]);
    });
    setDetails(newDetails);
  };

  let RemoveListItem = () => {
    let updatedlistItem = details2.filter((det) => {
      return det.id !== 2;
    });
    setDetails2(updatedlistItem);
  };

  let UpdateJob = () => {
    let newjob = details.map((list) => {
      if (list.job === "C") {
        return { ...list, job: "A" };
      } else {
        return list;
      }
    });
    setDetails(newjob);
  };

  return (
    <div className=''>
      <div>data type pringt through js expreasion in home page list (b)</div>
      <br></br>

      <div>
        {details.map((detail) => {
          return (
            <li>
              {detail.name} job - {detail.job}
            </li>
          );
        })}
      </div>

      <div>
        {details2.map((detail) => {
          return (
            <div>
              {detail.name}-----{detail.id}{" "}
            </div>
          );
        })}
      </div>
      <button onClick={UpdateJob} class={style.button}>job update click</button>
      <button onClick={updateData} class={style.buttonColor}>name update click</button>
      <button onClick={RemoveListItem} class={style.btnColor}> remove detail click</button>
    </div>
  );
}

export default HomeListItemB;
