import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {
  //  we have to stoore todos bydefault vlaues empty array
  // in this state is haas all todos
  const [todos, setTodos] = useState([])

  // basic functionality is to add
  // this todo we get from form
  // individual we didnt define at 
  const addTodo = (todo) =>{
    // now we want todo to go inside the setTodo
    // if we do like this setTodod(todo) then it will delete all the prev odo and add new todo 
    // we dont want like that so we are doing this way
    // from prev we get old array
    // we can add todo front or back of ...prev
    // /there are 3 object in todos 
    // id and ...todo other things in todo
    console.log(todo)
    setTodos((prev)=>[{id: Date.now(), ...todo},...prev])
    console.log(todo)
  }

  // this want id and todo
  // we have to find id wehich want to update we are making that in loop and find that id 
  const updateTodo=(id,todo)=>{
    // settodo callback
    // prev with loop that is map through map we get every individual todo in that there is object in that there is id
    // prevtodo the individual todo then callback
    // every prevTodo has id we get
    // that we will match with id
    // prevTodod all todo in array and id is update id we get
    // if it true if we get that id then we will put new todo
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo)))
  }

  const deleteTodo=(id)=>{
    // now we have put map for this but why 
    // prev is original array now we have to make new array 
    // new array should ,have all those values except deleted todo
    // better approach is filter 
    // todo any varaible naem you can give 
    // let all the value come but not deleted one 
    // if it matches with that id it is left there rest everything comes 
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id) )
    }
    // now its about check mark for thata we need to go inside object and make ocmpleted as false or true
    const toggleComplete=(id)=>{
      console.log(id);
      // in map we get value access of individual todo
      // take all the from too that is ...prevTodo in completed you toggle with the property is overrirded
      setTodos((prev)=>
        prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
    }

    // LOCAL STORAGE 
    // values will be in string formate we neeed to convert to json formate 
    // after refreshing what is that function which will go to local storage and get all the values then insert into todas
    useEffect(()=>{
      // while setting you have to give key and value 
      // first we need to get then set
      // convert to json then storing in varaible
      const todos = JSON.parse(localStorage.getItem("todos"))
      // check the values are there or not 
      // query the structure are return in json 
      if( todos && todos.length>0){
          setTodos(todos)
      }
    },[])
    // ignore this
  //   useEffect(() => {
  //     try {
  //         const todos = JSON.parse(localStorage.getItem("todos")) || [];
  //         setTodos(todos);
  //     } catch (error) {
  //         console.error("Error parsing todos from localStorage:", error);
  //         setTodos([]); // Reset to empty array if parsing fails
  //     }
  // }, []);
  

    // if there is chnage in todos then again we have to getitem for that reason so we are using separarte useffect
    useEffect(()=>{
      // key is todos
      // we need to convert it to string 
      
      localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])



  return (
    // now provider ahs wrapped and it should provide something destructuring it 
   <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* here we have to do loop we have to pass props */}
                        {/* all the todos it goe sto every todo () this will auto return the thing */}
                        {todos.map((todo)=>(
                    //  this div will repeat it will have each key to maek it differenet 
                            <div key={todo.id} className='w-full' >
                              {/* we have to pass prop */}
                              <TodoItem todo= {todo}/>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
