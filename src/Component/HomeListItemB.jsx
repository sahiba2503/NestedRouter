import React from 'react'

function HomeListItemB() {
  let num = 11;
  let str = "sahiba";
  let arr = [1,2,3,4,5];
  arr.push(6);
  str="sabina";
  num = 13;
function updateData(){
  num = 55;
  str = "saniya";
  arr = [1,2,3,4,5,6];
}
  return (
    <div className=''>
      <div>data type pringt through js expreasion in home page list (b)</div>
      <br></br>
      <div>{num}</div>
      <div>{str}</div>
      <div>{arr}</div>
      <button onClick={updateData}>click</button>
      
    </div>
  )
}

export default HomeListItemB
