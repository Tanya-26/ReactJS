import { useState } from "react";
// import Bootstrap from "../src/components/BootsrtapExp"
import Counter from "./components/Counter";
const App = () => {
  const [count, setCount] = useState(2);
  const increment = () => {
    setCount(count+1);
  };
  const decrement = () => {
    setCount(count-1);
  };
  return (
    <div className="container">
      {/* <Bootstrap/> */}
      <Counter count={count} increment={increment} decrement={decrement} />
      <Counter count={count} increment={increment} decrement={decrement} />
      <button className="mt-2 btn btn-primary" onClick={() => setCount(0)}> Reset </button>
    </div>
  );
};

export default App;
