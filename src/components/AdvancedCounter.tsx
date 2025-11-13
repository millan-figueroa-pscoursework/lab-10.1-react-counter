import { useState, useEffect } from "react";

const AdvancedCounter: React.FC = () => {
  // load saved count from localStorage (fallback to 0)
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem("count");
    return saved ? Number(saved) : 0;
  });

  // step value for now fixed at 1
  const [step] = useState<number>(1);

  // history array to keep track of count values
  const [history, setHistory] = useState<number[]>([0]);

  // increment function increases count by step (1) and updates history
  const increment = () => {
    setCount((prev) => {
      const next = prev + step;
      setHistory((h) => [...h, next]);
      return next;
    });
  };

  // decrement function decreases count by step (1) and updates history
  const decrement = () => {
    setCount((prev) => {
      const next = prev - step;
      setHistory((h) => [...h, next]);
      return next;
    });
  };

  // save current count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>

      {/* Display count history */}
      <h3>Count History:</h3>
      {/* .join() method converts the array into a comma-separated string */}
      <p>{history.join(", ")}</p>
    </div>
  );
};

export default AdvancedCounter;
