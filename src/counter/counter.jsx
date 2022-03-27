import { useState } from "react";

export default function Counter() {
  const [counterVal, setCounterVal] = useState(0)
  const [inputVal, setInputVal] = useState(1)

  return (
    <div>
      <h2 data-testid="header">My Counter</h2>
      <h2 data-testid="counter">{counterVal}</h2>
      <button data-testid="subtract-btn">-</button>
      <input data-testid="input" value={inputVal} />
      <button data-testid="add-btn">+</button>
    </div>
  );
}
