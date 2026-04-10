import React, { useState } from 'react'

const ToggleText = () => {
  const [isVisible,setIsVisible]=useState(false);
  return (
    <div><button onClick={()=>setIsVisible(!isVisible)}>
      {isVisible ? "Hide":"Show"} Text
      </button>
        {isVisible && <p>this is Secret message</p>}
      </div>
  )
}

export default ToggleText;
