import React ,{useState} from 'react'

const App = () => {
    const [count,app]=useState(0);
    return (
   <>
   <h1>{count}</h1>
   <button onClick={()=>app(count+1)}>
    Increment
   </button>
    <button onClick={()=>app(count-1)}>
    Increment
   </button>
   </>

    );
}
export default App
