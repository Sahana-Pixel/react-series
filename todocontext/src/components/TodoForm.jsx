import React, { useState } from 'react'
import { useTodo } from '../context';
function TodoForm() {
    // this state for individual todo
    const [todo, setTodo] = useState("");
    // functionality is already injected in app.js
    // we can get that from useTodo in useContext we have all tht 
    // if want any functionallity u acan just use this we can get that from useTodo
    const { addTodo } = useTodo();
    // what it works is threr in app.js

    // will do a method
    const add=(e)=>{
        e.preventDefault();
        // if there is nothing in todo just return
        if(!todo) return;
        // inside array its object so we are passing objects
        // id:Date.now() this is already there 
        addTodo({todo,completed:false});
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                // if there is any change 
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


