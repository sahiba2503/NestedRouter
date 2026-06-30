import React from 'react'

function HomeListItemC() {
  return (
    <div>
      this is home page list - c
    </div>
  )
}

export default HomeListItemC

///
// // // give some tricky question which type of value show on the ui through the {}
// import React, { useState } from "react";

// function App() { 

//   const [products, setProducts] = useState([
//     {  id: 1, name: "Apple",  },
//     {  id: 2, name: "Banana", },
//     {  id: 3, name: "orange", },  ]);

//   // const data1 = products.forEach((product) => {    
//   //   return <div>{product.name}</div>;
//   // });

//   const data2 = products.map((product) => {
//     return <div>{product.name}</div>;
//   });
// //console. data 
//   console.log({ data2 });

// //declare arr
//   const arr = ["a", "b", "c"];

// //declare arr1
//   const arr1 = ["<div>a<div>", "<div>b</div>", "<div>c</div>"];

// //push data in the arr
//   arr.push("<div>d</div>");

// //declare arr2 
//   const arr2 = [<div>a</div>, <div>b</div>, <div>c</div>];
// //products[0].name = apple,
// //false "sfd"
// //()= apple
// //product.name + "bbb" 
// //applebbb
// //applebbb
// //applebbb
//   return (
//     <div>
//       {products[0].name}

//       {false ? products[0].name : "sfd"}

//       {(function () {
//         return products[0].name;
//       })()}

//       {/* {products.forEach(() => {
//         return <div>{product.name + "aaa"}</div>;
//       })} */}

//       {products.map((product) => {
//         return <div>{product.name + "bbb"}</div>;
//       })}

//       {["a", "b", "c"]}

//       {arr.map((item) => {
//         return item;
//       })}

//       {arr1}

//       {arr}

//       {arr1.map((item) => {
//         return <div> {item}</div>;
//       })}

//       {arr2}
//     </div>
//   );
// }

// export default App;
