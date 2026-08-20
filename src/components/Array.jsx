import { useState } from 'react'

const Array = () => {
    const [numbers, setNumbers] = useState([1,2,3,4,5]);
    function addition(){
        setNumbers(numbers.map(num => num + 2));
    }
  return (
    <div>
        <h2>
            Current Numbers:
        </h2>
        <p>{numbers.join(', ')}</p>
      <button onClick={addition}>Add 2 to All</button>
    </div>
  )
}

export default Array
