import { useState } from 'react'
import './App.css'

function App() {
  // change ko propagate in ui
  // default value 
  // in array formate
  // setCounter is funtion 
  // setCounter is method that control counter
  // counter ka default value :15
  let [counter,setCounter]= useState(15)
  // let counter =5
  const addValue = () => {
    // counter=counter+1
    setCounter(counter+1)
    console.log(counter)
  }

  let removeValue = () => {
    // counter=counter-1
    setCounter(counter-1)
    console.log(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value :{counter}</h2>
      <button
      // button click honepe execute ho so passing only reference
      onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button 
      onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App

// in javascript we would do getElementById and all but react will make the ui control easier
// there special method given by react :hooks 
// through hooks value is updated