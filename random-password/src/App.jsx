import React, { useState } from 'react'

const App = () => {
  const [password, setpassword] = useState("");
  const generate=()=>{
    let char="abc123xyz@#";
    let pass="";
    for(let i=0;i<6;i++){
      pass=pass + char[maths.floor(math.random() * char.length)]
    }
    setpassword(pass);
  }
  return (
    <div>
      <h2>random password</h2>
      <input type="number" placeholder='show your random password'></input>
      <button onclick={generate}>click here</button>
    </div>
  )
}

export default App
