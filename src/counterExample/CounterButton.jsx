import { useDispatch } from "react-redux";
import { decrement, increment } from "../store/slices/counterSlice";

const CounterButton = () => {
    // const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

  return (
    <div className="mx-auto">
     
      <button onClick={()=>dispatch(increment())} aria-label="Increment value" className="px-4 py-2 m-2 bg-green-600 rounded-md">Increase +</button>
      <button onClick={()=>dispatch(decrement())} className="px-4 py-2 m-2 bg-red-600 rounded-md">Decrease -</button>
    </div>
  );
};

export default CounterButton;
