import {useDispatch,useSelector} from 'react-redux';
import { increment,decrement } from '../features/slices/counter/counterSlice';


function Counter() {
     const count=useSelector((state) => state.counter.value)
     const dispatch=useDispatch();
     const Inc=()=>{dispatch(increment())};
     const Dec=()=>{dispatch(decrement())};
  return (
    <div>
        <button onClick={Inc}>Increment</button>
        <h1 className="counter text-md">{count}</h1>
        <button onClick={Dec}>Decrement</button>
    </div>
  )
}

export default Counter