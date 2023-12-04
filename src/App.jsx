import TodoInput from "./components/TodoInput";

import {useSelector} from 'react-redux';
import TodoItems from "./components/TodoItems";
export default function App() {
  const todo=useSelector((state) => state.todo.value)
  console.log(todo);
  return (  
    <>
    <TodoInput/>
      {todo.map((todo) =>{return <TodoItems id={todo.todo.id} key={todo.todo.id}todoMessage={todo.todo.todoMessage}/>})}
    </>  

  )
}