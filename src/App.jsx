import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  // function clickMe() {
  //   alert("Welcome react event handling");
  // }

  //   function increment(count) {
  //     return count + 1;
  //   }
  //   function decrement(count) {
  //     return count - 1;
  //   }
  //   let count = 0;
  return (
    <div>
      {/* <button onClick={clickMe}>Click Me</button> */}
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}> Decrement</button>
    </div>
  );
};

export default App;
