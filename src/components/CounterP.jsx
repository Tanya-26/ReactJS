import { useState } from "react";
import Counter from "../components/Counter"

const CounterP = () => {
  const [counters, setCounters] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 2 },
    { id: 3, count: 4 },
    { id: 4, count: 6 },
  ]);

  // Pass the ID to know which counter to increment
  const increment = (id) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return { ...counter, count: counter.count + 1 };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  // Pass the ID to know which counter to decrement
  const decrement = (id) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return { ...counter, count: counter.count - 1 };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  // Reset all counters to 0
  const resetAll = () => {
    const resetCounters = counters.map((counter) => {
      return { ...counter, count: 0 };
    });
    setCounters(resetCounters);
  };

  return (
    <div className="container">
      {/* Map over the array and return JSX elements with a unique key */}
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.count}
          increment={() => increment(counter.id)}
          decrement={() => decrement(counter.id)}
        />
      ))}
      
      <button className="mt-2 btn btn-primary" onClick={resetAll}>
        Reset
      </button>
    </div>
  );
};

export default CounterP;