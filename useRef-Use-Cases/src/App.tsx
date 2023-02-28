import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);

  const numberRef = useRef<number>(0);
  const buttonRef = useRef<HTMLInputElement>(null);
  const oldCounterRef = useRef<any>();


  // not re render component
  useEffect(() => {
    numberRef.current = Math.random();
  });

  // ref to DOM elements
  useEffect(() => {
    buttonRef.current?.click();
  },[]);

  // last value ref
  useEffect(() => {
    oldCounterRef.current = count;
  },[count]);

  return (
    <div className="App">
      <div className="card">
        <button ref={buttonRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p> the old counter is {oldCounterRef.current} </p>
        <p> number is {number} </p>
        <p> ref is {numberRef.current} </p>
      </div>
    </div>
  );
}

export default App;
