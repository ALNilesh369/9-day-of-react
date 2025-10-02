import React from "react";


function childIncreate ({onIncrement}) {
  return <button onClick={onIncrement}>Increment</button>;
}

export default childIncreate;