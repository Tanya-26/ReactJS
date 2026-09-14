import { useCallback } from "react";
import MyButton from "./MyButton";
// Preserves function address
const UseCallbackEx = () => {
  // Define showMessage using the useCallback hook

  const showMessage = useCallback(() => {
    alert("Button was clicked!");
    // Your function logic goes here
  }, []); // The empty array ensures this function is only created once
  const message = () => {
    alert("Inside child");
  };
  return (
    <div>
      <h2>Use Callback Hook Example</h2>
      <button className="btn btn-primary" onClick={showMessage}>
        CLICK ME
      </button>
      <MyButton message={message} />
    </div>
  );
};

export default UseCallbackEx;
