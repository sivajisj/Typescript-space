import Counter from "./Counter";


function App(){
  
  return(
    <>
    <Counter >{(num: number | string)=> <>Current Count: {num}</>}</Counter>
    </>
  )
}

export default App;