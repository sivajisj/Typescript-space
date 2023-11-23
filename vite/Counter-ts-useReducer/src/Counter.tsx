import { ChangeEvent, ReactNode, useReducer } from "react";


type ChildrenType = {
  children: (num: number) => ReactNode
}

const Counter = ({children}: ChildrenType) =>{
  // const [count, setCount] = useState<number>(1);

  const [state, dispatch] = useReducer(reducer,initState); 

  const increment = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT});
  const decrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT});
  const newInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value});
  }
  return (
    <div>
      <h1>{children(state.count)}</h1>

      <p>{(state.text)}</p>
      <div className="btn">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <input type="text" onChange={newInput}/>
      </div>
      
    </div>
  );
}

export default Counter;