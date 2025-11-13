import { useState } from "react";

const AdvancedCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [step] = useState<number>(1);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);

  return (
    <div>
      <h1>Counter</h1>

      <p>Current Count: {count}</p>

      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default AdvancedCounter;
