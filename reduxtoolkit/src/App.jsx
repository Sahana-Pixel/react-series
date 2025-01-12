import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
function App() {
  return (
   <>
   <h1>Learn about redux toolkit</h1>
   <AddTodo/>
   <Todo  />
   {/* it need to be wrapped so we need provider 
   */}
   </>
  )
}

export default App
