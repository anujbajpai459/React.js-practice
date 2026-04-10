import React,{useState} from 'react'

const Student = () => {
   const [student, setstudent] = useState({
    Name:"anuj",
    grade:"A",
    city:"Delhi"

   })
  const changeAll=()=>{
    setstudent({...student,city:"kanpur"})
  }
  return (
    <div>
      <p>Name:{student.Name}</p>
      <p>Name:{student.grade}</p>
      <p>Name:{student.city}</p>
      <button onClick={changeAll}>Change city</button>
    </div>
  )
}

export default Student
