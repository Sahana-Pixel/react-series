import Meow from './Meow.jsx'


function App() {
  // how variables are traeted:{}
  const dog= "bow bow"
  return (
    <>
    {/* {}: evaluated expression  */}
    <h1>Hello, {dog}</h1>
    {/* whrere does this do go */}
  <Meow/>
  </>
  )
}

export default App

// we can export only one element<></> this are fragment
// they are wrapping
// Meow.jsx is component it should be also capital