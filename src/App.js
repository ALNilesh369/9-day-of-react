import React, { useState } from "react";
import Challan from "./components/Challange";

function ChildIncrement({ onIncrement }) {
  return <button onClick={onIncrement}>Increase</button>;
}

function ChildDecrement({ onDecrement }) {
  return <button onClick={onDecrement}>Decrease</button>;
}

function ParentCounter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      {/* <h2>Parent Counter: {count}</h2>
      <ChildIncrement onIncrement={increase} />
      <ChildDecrement onDecrement={decrease} /> */}
      <Challan />
    </div>
  );
}

export default ParentCounter;
