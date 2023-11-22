import { ChangeEvent, ReactNode, useReducer } from "react";



const initState = {count: 0, text: ''}


const enum REDUCER_ACTION_TYPE  {
  INCREMENT ,
  DECREMENT,
  NEW_INPUT
}
const reducer = (state: typeof initState, action: ReducerActionType): typeof initState =>{
  switch(action.type){
    case REDUCER_ACTION_TYPE.INCREMENT:
      return {...state, count: state.count + 1}
    case REDUCER_ACTION_TYPE.DECREMENT:
      return {...state, count: state.count - 1}
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return {...state, text: action.payload?? ""}
    default:
      
      throw new Error()
  }
}



type ReducerActionType = {
  type: REDUCER_ACTION_TYPE,
  payload?: string
}


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