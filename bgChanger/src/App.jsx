import { useState } from 'react'
import './App.css'

// if there is change in ui then bring the state
function App() {
  const [color, setcolor] = useState("black")

  return (
   <>
   {/* to implement state tyle={{}} */}
   <div className='w-full h-screen duration-200' 
   style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 text-white rounded-lg'style={{backgroundColor:"red"}}
        // onclick expect you to pass function
        // onclick want function now wht it returns setcolor is function
        // callback we are doing function ke andar functio hthis are syantax
        onClick={()=> setcolor('red')} >
          red
        </button>
        <button className='outline-none px-4 text-white rounded-lg'style={{backgroundColor:"green"}}
        onClick={()=> setcolor('green')} >
          green
        </button>
        <button className='outline-none px-4 text-white rounded-lg'style={{backgroundColor:"pink"}} 
        onClick={()=> setcolor('pink')}>
          pink
        </button>
        <button className='outline-none px-4 text-white rounded-lg'style={{backgroundColor:"brown"}} 
        onClick={()=> setcolor('brown')}>
          brown
        </button>
        <button className='outline-none px-4 text-white rounded-lg'style={{backgroundColor:"blue"}}
        onClick={()=> setcolor('blue')} >
          blue
        </button>

      </div>
    </div>
   </div>
   </>
  )
}

export default App
