import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  function clickMe() {
    alert("Welcome react event handling");
  }

  //   function increment(count) {
  //     return count + 1;
  //   }
  //   function decrement(count) {
  //     return count - 1;
  //   }
  //   let count = 0;
  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <h1>{count}</h1> 
      <button onClick={() => setCount(count + 1)}> Inc</button>
      <button onClick={() => setCount(count - 1)}> Dec</button>
    </div>
  );
};

export default App;
