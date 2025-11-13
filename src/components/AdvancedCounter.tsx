import { useState } from "react";

const AdvancedCounter: React.FC = () => {
  // current count starts at 0
  const [count, setCount] = useState<number>(0);

  // step value for now fixed at 1
  const [step] = useState<number>(1);

  // history array to keep track of cout values
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

  return (
    <div>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
      <h3>Count History:</h3>
      {/* .join() method to convert array into a single string */}
      <p>{history.join(", ")}</p>
    </div>
  );
};

export default AdvancedCounter;
