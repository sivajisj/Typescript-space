import {useContext, ChangeEvent, ReactElement, createContext, useCallback, useReducer } from "react";


export const initState: StateType = {count: 0, text: ''}


const enum REDUCER_ACTION_TYPE  {
  INCREMENT ,
  DECREMENT,
  NEW_INPUT
}
const reducer = (state: StateType, action: ReducerActionType): typeof initState =>{
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


type StateType = {
    count: number,
    text: string
}



type ReducerActionType = {
  type: REDUCER_ACTION_TYPE,
  payload?: string
}


 const useCounterContext = (initState: StateType) =>{


    const [state, dispatch] = useReducer(reducer,initState); 

  const increment = useCallback(() => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT}),[]);
  const decrement = useCallback(() => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT}),[]);
  const newInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value});
  },[]);


  return {state, increment, decrement, newInput}


}

type useCounterContextType = ReturnType< typeof useCounterContext>;

const initContextState: useCounterContextType ={
    state: initState,
    increment: ()=> {},
    decrement: ()=> {},
    newInput: (e: ChangeEvent<HTMLInputElement>)=> {}

}
export const CounterContext = createContext<useCounterContextType>(initContextState);

type ChildrenType ={
    children: ReactElement | undefined
}


export const CounterProvider = ({
    children, ...initState
}: ChildrenType & StateType): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initState)}>
            {children}
        </CounterContext.Provider>
    )
}
                                        

type UseCounterHook = {
  count: number,
  increment: ()=> void,
  decrement: ()=> void,
}

export const useCounter = (): UseCounterHook => {
     const {state: {count}, increment, decrement} = useContext(CounterContext);
  
    return {
      count,
      increment,
      decrement
    }
}

type UseCounterTextHook2 = {
  text: string,
  newInput: (e: ChangeEvent<HTMLInputElement>)=> void
 
}

export const useCounterText = (): UseCounterTextHook2 => {
  const {state: {text}, newInput} = useCounterContext(CounterContext);

  return {
    text,
    newInput
  }
}