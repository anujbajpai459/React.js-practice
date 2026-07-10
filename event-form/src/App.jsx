import React from 'react'

const App = () => {
  
    function handleInputChange(e){
      console.log(e.target.value);
    }
    function handleSubmit(e){
      e.preventDefault();
      alert("form Submit krdu kya");
    }
    return(
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e)=>handleInputChange(e)}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
