import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:[],
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,actions)=>{
            state.value.push(actions.payload)
        },
        deleteTodo:(state,actions)=>{
            state.value=state.value.filter((items)=>items.todo.id!==actions.payload)
        }
    },

});
export const {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer;

