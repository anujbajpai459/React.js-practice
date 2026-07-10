import React from 'react'
import {useEffect,useState} from 'react';
const App = () => {
  const[count,setCount]=useState(0);
  useEffect(() => {
   alert("i wll run on each render");
  },[]);
const handleCount=()=>{
  setCount(count+1);
}
  
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={handleCount}>Click me</button>
    </div>
  )
}

export default App
