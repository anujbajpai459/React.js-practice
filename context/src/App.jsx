import React ,{useState} from 'react'
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Profile from "./c"
const App = () => {
  const[user,setUser]=useState({
    name:"Anuj";
  })
  return (
    <AuthContext.provider value={user}>
      <Navbar/>
      <Profile/>
    </AuthContext.provider>
  )
}

export default App
