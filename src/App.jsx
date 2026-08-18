const App = () => {
  function clickMe() {
    alert("Welcome react event handling");
  }
  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
    </div>
  );
};

export default App;