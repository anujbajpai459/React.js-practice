// import React, { useState } from 'react'

// const App = () => {
//   const[num,setnum]=useState(10)
//   const btnClicked=()=>{
//        setnum(20);
//   }
//   return (
//     <>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click me</button>
//     </>
//   )
// }

// export default App
import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({
    user: "Sarthak",
    age: 20,
  });

  const btnClicked = () => {
    const newNum = { ...num };

    newNum.user = "Anuj";

    setNum(newNum);
  };

  return (
    <>
      <h1>
        {num.user}, {num.age}
      </h1>

      <button onClick={btnClicked}>
        Click
      </button>
    </>
  );
};

export default App;
