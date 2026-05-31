import React from 'react'

const App = () => {
  const btnclicked=(val)=>{
    console.log(val);
  }
  return (
    <div>
      <h1>Helllo, Sarthak</h1>
      <input onChange={function(elem){
        btnclicked(elem.target.value)
      }}
      type="text"
      placeholder='Enter Name'></input>
    </div>
  )
}

export default App
