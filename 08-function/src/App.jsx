import React from 'react'

const App = () => {

     function greet(name){
      alert("hello"+ name);
     }
  return (
    <div>
     <button onClick={()=>greet("anuj")}>Click</button>
    </div>
  )
}
export default App
