import { useState, useMemo } from "react";
// useMemo remembers the result of calculation preserves the value as cache
const UseMemoEx = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(20);

  const doubleValue = useMemo(() => {
    console.log("Function Double executed");
    for (let i = 0; i < 1000000000; i++) {
      console.log("Function Double");
      // Simulating a heavy computation loop
      return num * 2;
    }
  }, [num]);

  return (
    <div>
      <h2>Example of UseMemo Hook</h2>
      <h2>
        Double of {num} is {doubleValue}
      </h2>
      <h2>Count: {count}</h2>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
};

export default UseMemoEx;
