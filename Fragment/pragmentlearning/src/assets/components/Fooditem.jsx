import React from 'react'

const Fooditem = () => {
 let fooditem=['Dal','Green vegetable','Roti','Salad','Milk']; 
  return (
  <ul class="list-group">
    {fooditem.map((item)=>{
     return <li
     key={item}class="list-group-item">{item}</li>
    })}
</ul>
  );
}

export default Fooditem;
