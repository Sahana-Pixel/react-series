
import './App.css'
import Card from './components/Card'


function App() {
  // i will craete object here and i will pass this object through props 
  // directly i cannot write in props
let obj ={
  username:"ceily",
  age:2
}
// if i can  pass object i can pass array also
let newArr=[1,2,3]
  return (
   <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
  {/* we can load card here
  any name we can give just like someobj
  // we have pass though variable */}
  <Card username="meow meow" btnText="view"/>
  {/* props will chNGE value 
  props bydeafult is empty */}
  <Card username="mimi"/>
   </>
  )
}

export default App
