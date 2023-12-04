
import { useState } from "react";
import { MdDeleteForever} from "react-icons/md";
import {useDispatch} from 'react-redux'
import { deleteTodo } from "../features/slices/todo/todoSlice";

// eslint-disable-next-line react/prop-types
function TodoItems({todoMessage,id}) {
  const dispatch = useDispatch();
    const [isCheckbox,setCheckbox] = useState(false);
  
    const Delete=()=>{
      dispatch(deleteTodo(id))
    }
  return (
    <div className={`${isCheckbox?"bg-[#D0F288]":""} todocontainer w-full h-16 shadow-md  mt-10 border-2 flex items-center  rounded-md border-black`}>
        <div className="inputContainer h-10 w-full flex items-center  ">
          <input className='w-8 h-8 ml-4 ' checked={isCheckbox} type="checkbox" name="" id="" onChange={(e)=>{setCheckbox(e.target.checked);}}/>
          <input maxLength={105} value={todoMessage}  readOnly={true} type="text"className={`outline-none ml-4 w-full bg-transparent rounded-lg text-2xl ${isCheckbox?"line-through ":""}`}/>
        </div>
      <div className="btncontainer  flex justify-between border-black gap-3 w-20 mr-4">
        <button onClick={Delete} className='p-1 border border-black border-2  rounded-md'><MdDeleteForever color="#B31312" size={25}/></button>
      </div>
    </div>
  )
}

export default TodoItems