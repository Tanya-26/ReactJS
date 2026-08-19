import { useState } from "react";

const App = () => {
  const initName={
    id:1,name:"KIET"
  }
  let [nameObj, setName] = useState(initName);
  const changeName = (newName)=>{
    setName({...nameObj, name:newName});
  }
  // string
  // const [name, setName] = useState("KIET");

  // function changeName(newName){
  //   setName(newName);
  // }
  // function clickMe() {
  //   alert("Welcome react event handling");
  // }

  return (
    <div>
      {/* <button onClick={clickMe}>Click Me</button> */}
      
      <button onClick={()=>changeName("KIET MCA")}>Change Name</button>
        <p>Current Name: {nameObj.name}</p> 
    </div>
  );
};

export default App;
