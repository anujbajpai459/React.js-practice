import React ,{useState} from 'react'

const InputExaxple = () => {
  const [name, setName] = useState("")
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><h2>Hello,{name || "Guest"}</h2>
    </div>
  )
}

export default InputExaxple

