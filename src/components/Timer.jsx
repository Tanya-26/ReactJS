import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    // Don't create timer when stopped
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        right: 20
      }}
    >
      <label>Time: </label>

      <h3>{time}</h3>

      <button
        onClick={() => setIsRunning(true)}
        disabled={isRunning}
      >
        Start
      </button>

      <button
        onClick={() => setIsRunning(false)}
        disabled={!isRunning}
      >
        Stop
      </button>
    </div>
  );
}