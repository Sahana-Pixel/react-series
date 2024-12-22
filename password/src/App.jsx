import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// we want lenghth to track length useState
// add default value 
// number true and false , default value false
// to update password in input useState
function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [password, setPassword] = useState("")

  // useReff hook
  // password ka reference 
  // defualt we can give 
  const passwordReff =useRef(null)
  // now where to use this passwordReff
  // refenece take and we can do manipulation with that 

  // something if we touch then useEffect is used 
  // callback to keep in cache
  // we are making password generator 
  // method is same run again and again -> usecallbackk
  // number character ->dependies 
  // tow passes function and dependies (array) , fn we are pasiing along with dependies=> ()=>{}
  const passwordGenerator = useCallback(()=>{
    let pass=""
    // data from whic we get password
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // if number is true then
    if(number){
      str += "0123456789"
    }
    // if symbol is allowed then
    if(symbol){
      str += "!@#$%^&*()"
    }
    //  i can do loop but for whaat extend? till length 
    for(let i=0;i<=length;i++){
      // get random character from string
      let randomChar = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(randomChar)
    }
    setPassword(pass)

  }, [length,number,symbol])
  // usecallback memorise the functionmemory reuse if u give password it keep change 
  // next mtheod of copyPassword
  // optimize useCallback bar bar run nahi hoga dependies which used 
  const copyPassword = useCallback(()=>{
    // passwordReff check curent object ,, useer get optimized 
    // optional select ?
    passwordReff.current?.select()
    // also we can give range it select that range 
    passwordReff.current?.setSelectionRange(0, 100)
    // nextjs server me run hota hain 
    // in js tehre is window object
    
    window.navigator.clipboard.writeText(password)
  },[password])
  // useEffect to run when component mounts
  // or whenever any of the dependencies change
  // length, number, symbol, passwordGenerator
  // if any of these changes then run passwordGenerator again
  // so that new password will be generated
  // if length, number, symbol changes then password will be generated again
  // we don't want to call it every time 
  // we want to call it only when these changes happen
  // so we use useEffect hook
  // it takes two arguments first is a function which we want to run, second is an array of dependencies
  // if dependencies are empty then it will run only once when component mounts
  // if dependencies are not empty then it will run every time when any of the dependencies changes
  // in our case, dependencies are length, number, symbol, passwordGenerator

//  if it touches dependies that will run again
// run goal is done here
  useEffect(()=>{
    passwordGenerator()
  }, [length, number, symbol,passwordGenerator])

  // copy the portion to copy there is another hook for it useReff-> to reference the 
  return (
   <>
  
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-blue-300 bg-gray-700'>
   <h1 className=' text-center text-white my-3'>Password Generation</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
      <input type="text"
      value={password}
      placeholder='password'
      className='outline-none w-full py-1 px-3'
      readOnly
      // every input we can give erefence 
      ref={passwordReff}

      
      />
      <button
      // button clicked somehting should happen 
      onClick={copyPassword}
      className='outline-none bg-blue-500 text-white px-3 py-2.5 shrink-0'>copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value);}}
        />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={number}
        id='numberInput'
        onChange={()=>{
          setNumber((prev)=>!prev)} }/>
        <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={symbol}
        id='symbolInput'
        // in this callback we get access to previous value 
        onChange={()=>{
          setSymbol((prev)=>!prev)} }/>
        <label>Character</label>
      </div>
     </div>
   </div>
   </>
  )
}

export default App

// useEffect -> rendering the code 