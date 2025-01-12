// how to do the store
// 1. we have to bring configurestore from redux
// store is done from using methos varaible export 
// store come from configure store this take object inside
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
// put key value here to put value 
export const store = configureStore({
    reducer: todoReducer
})

// now in any component we can have state access