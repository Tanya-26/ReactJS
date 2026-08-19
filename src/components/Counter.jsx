import {useState} from 'react'

const Counter = () => {
    // number
  const [count, setCount] = useState(0);
  //   function increment(count) {
  //     return count + 1;
  //   }
  //   function decrement(count) {
  //     return count - 1;
  //   }
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}> Decrement</button>
    </div>
  )
}

export default Counter
