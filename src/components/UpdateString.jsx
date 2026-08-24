import { useState } from "react";

const initName = {
  id: 1,
  name: "KIET"
};

const App = () => {
  
  const [nameObj, setName] = useState(initName);

  const changeName = (newName) => {
    
    setName({ ...nameObj, name: newName });
  };

  return (
    <div>
      <button onClick={() => changeName("KIET MCA")}>Change Name</button>
      <p>Current Name: {nameObj.name}</p> 
    </div>
  );
};

export default App;