import { ChangeEvent, ReactNode, useReducer } from "react";
import { useCounter } from "./context/CounterContext";
import { useCounterText } from "./context/CounterContext";


type ChildrenType = {
  children: (num: number) => ReactNode
}

const Counter = ({children}: ChildrenType) =>{
   const {count, increment, decrement} = useCounter();
   const {text, newInput} = useCounterText();


  return (
    <div>
      <h1>{children(count)}</h1>

      <p>{(text)}</p>
      <div className="btn">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <input type="text" onChange={newInput}/>
      </div>
      
    </div>
  );
}

export default Counter;