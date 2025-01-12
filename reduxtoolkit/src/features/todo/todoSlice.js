// next we are doing reduces
// we name that slices
// inside feature we can login feature this that and all
// naming conventon todoSlice 
// first method creatSlice 
// id we use 1 2 3 or date.now here we have mthod nanoid that generate id
import { createSlice,nanoid } from "@reduxjs/toolkit";

// intial State store starting what is should be 
// now its object
const initialState={
    todos:[{
        id:1,
        text:"helllo"
    }]

}

// slice is reduce bigger version
// createSlice is mthode which has object
// name is in property of redux
// every slice state has intial state
// we can intial state directly here
// now here only we can make reducess
// in reducer we have object wchich is property and function
export const todoSlice= createSlice({
    name:"todo",
    // this state
    initialState,
    reducers:{
        // addTodo is action name
        // payload is what we want to add
        // addtodo is poprty 
        // we can define it outside also 
        //  this is syantax state and action unlike context
        // state is intial state what we have for access
        // action-> like id and all values
        // sending data here
        addTodo:(state,action)=>{
            // todo will get from action 
            // we are making todo
            // payload is object 
            const todo ={
                // we are using Date.now beforre
                id:nanoid(),
                // action inside payload its a object 
                text:action.payload
            }
            // intialstate access
            // in end we do this to access state
            state.todos.push(todo)
         
        },
        // removeTodo is action name
        // through state ew get current state
        // we are getting data here
        removeTodo:(state,action)=>{
            // as there is todos we will overit it
            // todo which you want to delete thats id is matched with id in action 
            // it removes that from filter 
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },

       
    }

})

// now we have to export in 2 parts
// first will export the funcitonality
// addTodo and removeTodo from that only we  wil update the state
// from this action we get value
// individual reducer has to be exported
export const {addTodo, removeTodo} = todoSlice.actions;

// store also need awarness of reducers
// whaterve reducers there that will be updated
// so it need list of all reducer
export default todoSlice.reducer