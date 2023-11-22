import Counter from "./Counter";
import { CounterProvider, initState } from "./context/CounterContext";

function App(){
  
  return(
  
    <CounterProvider count={initState.count} text={initState.text}>
    <Counter >{(num: number | string)=> <>Current Count: {num}</>}</Counter>
    </CounterProvider>
    
 
  )
}

export default App;