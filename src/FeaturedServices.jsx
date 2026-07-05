

import React from "react";

function FeaturedServices() {
  let arr1 = ["a", "b", "c"];
  let arr2 = [1, 2, 3];
  let arr3 = [<div>a</div>, <div>b</div>, <div>c</div>];
  let arr6 = [<span>a</span>, <span>b</span>, <span>c</span>];
  let arr4 = ["<div>a</div>", "<div>b</div>", "<div>c</div>"];
  let arr5 = ["<span>a</span>", "<span>b</span>", "<span>c</span>"];
  return (
    <div>
      FeaturedServices
      <span>
        print each element one by one using map .my arr is ["a","b","c"]
      </span>
      <div>
        {arr1.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <span>print each element one by one using map .my arr is [1,2,3]</span>
      <div>
        {arr2.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <span>print each element one by one using map .my arr is arr3</span>
      <div>
        {arr3.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <span>print each element one by one using map .my arr is arr4</span>
      <div>
        {arr4.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <span>
        print each element one by one using map .my arr is arr4 but use span tag
      </span>
      <div>
        {arr4.map((item) => {
          return <span>{item}</span>;
        })}
      </div>
      <span>print each element one by one using map .my arr is arr5</span>
      <div>
        {arr5.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <span>
        print each element one by one using map .my arr is arr5 but use span tag
      </span>
      <div>
        {arr5.map((item) => {
          return <span>{item}</span>;
        })}
      </div>
    </div>
  );
}

export default FeaturedServices;

