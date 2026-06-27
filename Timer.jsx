import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const i = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(i);
  }, [running]);

  return (
    <div>
      <div className="timer">{time}s</div>
      <button onClick={() => setRunning(!running)}>
        {running ? "STOP" : "START"}
      </button>
    </div>
  );
}
