import { useRef } from 'react';

const Home = () => {
  const info = useRef();
  const btn = useRef(); // Define the ref for the button
  
  const onFocus = (e) => {
    e.preventDefault(); 
    info.current.focus(); 
    btn.current.style.backgroundColor = "Green"; // Now btn is defined and can be modified
  }

  return (
    <div style={{height: "80vh"}}>
      <h2>use ref Hook Example</h2>
      <form action="">
        <input type="text" ref={info}/>
        <button ref={btn} className='btn btn-primary' onClick={onFocus}>
          Set Focus
        </button>
      </form>
    </div>
  )
}

export default Home;