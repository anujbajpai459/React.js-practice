// import React,{useState} from 'react'

// const App = () => {
//     const [show ,setShow]=useState(false);
//     return(
// <>
// <input type={show?"text":"password"}></input>
// <button onClick={()=>setShow(!show)}
//   >{show ? "hide":"show"}</button>
// </>
//   )
// }

// export default App

//import { useState } from "react";

// function App() {
//   const [liked, setLiked] =
//     useState(false);

//   return (
//     <>
//       <button
//         onClick={() =>
//           setLiked(!liked)
//         }
//       >
//         {liked
//           ? "❤️ Liked"
//           : "🤍 Like"}
//       </button>
//     </>
//   );
// }

// export default App;

import React , {useState}  from 'react' 

const App = () => {
  const [dark,setdark]=useState(false);
  return (
    <div style={{background:dark?"black":"white",
      color: dark ? "white" : "black",
        Height: "100vh",
        width:"100vw",}}>
      <button onClick={()=>setdark(!dark)}>Change Theme</button>
    </div>
  )
}

export default App;

