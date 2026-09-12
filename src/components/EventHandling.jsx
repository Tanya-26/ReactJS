import React, { useState } from "react";
import A from "./A";
import { createContext } from "react";
export const context = React.createContext();
const EventHandling = () => {
  const [name, setName] = useState("KIET");
  return (
    <div style={{ height: "80vh" }}>
      Home
      <context.Provider value={{name, setName}}>
        <A />
      </context.Provider>
    </div>
  );
};

export default EventHandling;
