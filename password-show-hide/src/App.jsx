import React,{useState} from 'react'
const App = () => {
  const[show,setShow]=useState(false);
  return (
    <div>
      <input type={show?"text":"password"} placeholder="Enter password" />
      <button onClick={()=>setShow(!show)}>{show?"Hide":"show"}</button>
    </div>
  )
}
export default App;
