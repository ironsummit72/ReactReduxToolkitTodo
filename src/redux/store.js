import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/slices/counter/counterSlice'
import todoReducer from '../features/slices/todo/todoSlice'







export const store=configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer
    },
    devTools:true,

})