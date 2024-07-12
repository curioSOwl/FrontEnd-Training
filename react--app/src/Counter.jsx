import { useState, useEffect, useRef } from "react";
import "./buttonStyle.css";
let color = "grey";
export default function Counter() {
  const [counter, setCounter] = useState(0);

  const inputRef = useRef();

  useEffect(() => {
    if (counter % 2 == 0) {
      color = "grey";
    } else {
      color = "white";
    }
    return () => {
      console.log("counter changed");
    };
  }, [counter]);

  return (
    <div className="Counter">
      <input type="text" ref={inputRef}></input>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
          inputRef.current.focus();
        }}
        className="button__counter increase__btn"
      >
        +
      </button>
      {counter}
      <button
        onClick={() => setCounter((prev) => prev - 1)}
        className="button__counter decrease__btn"
      >
        -
      </button>
      <button
        onClick={() => setCounter(0)}
        className="button__reset"
        style={{ backgroundColor: color }}
      >
        Reset
      </button>
    </div>
  );
}
