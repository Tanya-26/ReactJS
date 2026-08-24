import { useState } from 'react'

const ArrayComponent = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [num, setNum] = useState([
    { id: 1, n: 10 },
    { id: 2, n: 20 },
    { id: 3, n: 30 },
    { id: 4, n: 40 },
    { id: 5, n: 50 },
  ]);

  // Updates the plain numbers array
  function addition() {
    setNumbers(numbers.map(n => n + 2));
  }

  const plusTwo = () => {
    setNum((prev) => prev.map((row) => ({ ...row, n: row.n + 2 })));
  };

  return (
    <div>
      <h2>Current Numbers:</h2>
      <p>{numbers.join(', ')}</p>
      <button onClick={addition}>Add 2 to Numbers</button>

      <h2>Current Objects:</h2>
      <p>{num.map(item => `ID ${item.id}: ${item.n}`).join(' | ')}</p>
      <button onClick={plusTwo}>Add 2 to Objects</button>
    </div>
  );
};

export default ArrayComponent;
