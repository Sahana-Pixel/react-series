// data will be sent 
import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
// to update value we need state 
// how to fetch from userContext that will be done useContext
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUser}=useContext(UserContext)
    const handleSubmit =(e)=>{
    // if username and password is valid then setUser
    // event comes , i dont want value to go through url
        e.preventDefault()
        // i have to pass data
        setUser({username,password})
    }
  
    return (
    // contetx andar fetch karni hain
    <div>
        <h2>Login</h2>
        <input type="text"
        // when change in this field
        value={username}
        // if thereis an event then pass that vlue to setUsername
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username' />
        <input type="text"
        value={password}
        // if thereis an event then pass that vlue to setUsername
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
