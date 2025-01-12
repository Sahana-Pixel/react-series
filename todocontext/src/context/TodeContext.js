import React from "react";
import { useContext } from "react";
import { createContext } from "react";
// there are no database we are storing in local storage
// for that we need to create id 
// its a object craeteContext 
export const TodoContext = createContext({
    // eveery todo will be object 
    // will make todos array
    todos:[
        {
            id:1,
            todo:"Todo msg",
            // bydefault its false
            completed:false,
        }

    ],
    // now we are passing functionality
    // we just define function how it works we do it in app.jsx
    // in addTodo we want only todo
    addTodo:(todo) =>{},
    updateTodo:(id,todo) =>{},
    deleteTodo:(id) =>{},
    toggleComplete:(id) =>{}
    

})

// we dont have to use again again  we will export hoook and that is just a method
export const useTodo =() =>{
    return useContext(TodoContext)
}

// wrap provider
export const TodoProvider=TodoContext.Provider