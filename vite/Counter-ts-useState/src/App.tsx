import { useCallback, useEffect, useState,MouseEvent,KeyboardEvent, useMemo, useRef } from "react";

interface User {
  id: number;
  username: string;
}


type fibFunc = (n: number) => number;
const fib: fibFunc= (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

const myNum: number = 22
// const val = fib(myNum)
// console.log(val);


export default function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inpRef = useRef<HTMLInputElement>(null)

  console.log(inpRef?.current);
  console.log(inpRef?.current?.value);
  
  

  useEffect(() => {
    console.log("mounting...!");
    console.log("Users: ", users);

    return () => console.log("unmounting...!");
  }, [users]);

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> |  KeyboardEvent <HTMLButtonElement> ): void => setCount(prev => prev + 2), []);
  
  const res = useMemo(()=> fib(myNum),[myNum])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Remove</button>
      <button onClick={addTwo}>AddTwo</button>
      <h1>{res}</h1>

      <input type="text" ref={inpRef}  />
      <h1>{inpRef?.current?.value}</h1>
    </div>
  );
}
