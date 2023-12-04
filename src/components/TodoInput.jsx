import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/slices/todo/todoSlice";
import RandomIdGenerator from "../module/RandomIdGen";



function TodoInput() {
    const [todos,setTodo]=useState('');
    const dispatch = useDispatch();
    const Add=()=>{
         dispatch(addTodo({todo:{id:RandomIdGenerator(9),todoMessage:todos}}))
         setTodo('')
    }

  return (
    <div className="w-100 h-48  flex justify-center items-center ">
    <input value={todos} onChange={(e)=>{setTodo(e.target.value)}} maxLength={105} type="text"  className={` p-5 w-2/3 mr-8 border-4 border-black text-4xl font-bold rounded-2xl focus:outline-transparent`} name="" placeholder="Add a Task ...." id="" />
    <button onClick={Add} className=" w-48 border-black border-4 p-5 shadow-md rounded-e-3xl font-bold text-4xl bg-[#BAC964]">Add</button>
    </div>
  )
}

export default TodoInput