import React from "react";


function childDecrement ({onIncrement}) {
  return <button onClick={onIncrement}>Increment</button>;
}

export default childDecrement;