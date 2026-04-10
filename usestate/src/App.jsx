import React ,{useState} from 'react'

const App = () => {
  const [num,setNum] = useState({user:'sarthak',age:20})
 const btnClicked=()=>{
  const newNum ={...num};
  newNum.user='Amna';
  newNum.age=29;
  setNum(newNum);
 }

  return (
    <div>
     <h1>{num.user},{num.age}</h1>
     <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
