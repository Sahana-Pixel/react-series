
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  // now we need to handle context api
  return (
    // Usezcontext have be imported
   <UserContextProvider>
   <h1>React with chai</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
