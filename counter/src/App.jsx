import React ,{useState} from 'react'

const App = () => {
  const[count,setCount]=useState(0);
  const incre=()=>{
    if(count<20)
    setCount(count+1);
  }
  const dec=()=>{
    if(count>0)
    setCount(count-1);
  }
  const reset=()=>{
    setCount(0);
  }

  return (
    <div>
      <h1>counter:{count}</h1>
      <button onClick={incre}>Increase</button>
      <button onClick={dec}>decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
