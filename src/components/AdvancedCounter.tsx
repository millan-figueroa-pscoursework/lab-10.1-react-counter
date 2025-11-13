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

  // debounced auto-save with cleanup
  useEffect(() => {
    // wait 300ms before saving if count changes again cancel previous timeout
    const timer = setTimeout(() => {
      localStorage.setItem("count", String(count));
    }, 300);

    // cleanup cancel pending save if count changes quickly
    return () => clearTimeout(timer);
  }, [count]);

  // keyboard event listeners for ArrowUp and ArrowDown
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        increment();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        decrement();
      }
    };

    // add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown);

    // cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // empty dependency array ensures it runs only once

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 flex items-center justify-center p-6">
      <div className="border-2 border-neutral-400 rounded-xl p-8 bg-neutral-100 max-w-md w-full text-center">
        {/* Display current count */}
        <p className="text-4xl text-gray-300 mb-6 font-semibold">
          Current Count: <span className="text-green-600">{count}</span>
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 my-10">
          <button
            onClick={decrement}
            className="px-4 py-2 rounded border text-white border-neutral-300 bg-neutral-600 hover:bg-neutral-500"
          >
            Decrement
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 rounded border text-white border-neutral-300 bg-neutral-600 hover:bg-neutral-500"
          >
            Increment
          </button>
          <button className="text-white px-4 py-2 rounded bg-green-700 hover:bg-green-600">
            Reset
          </button>
        </div>

        <p className="mb-4">
          Step Value: <span className="font-semibold">{step}</span>
        </p>

        {/* saved status placeholder */}
        <p className="italic text-sm text-green-600 mb-6">Changes saved.</p>

        <h3 className="text-left font-semibold border-t border-neutral-700 pt-4">
          Count History:
        </h3>
        <p className="text-left mt-1">{history.join(", ")}</p>

        {/* keyboard hint */}
        <p className="text-xs mt-6 text-neutral-400">
          Use ArrowUp to increment and ArrowDown to decrement.
        </p>
      </div>
    </div>
  );
};

export default AdvancedCounter;
