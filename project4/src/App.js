import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  //count+1
  const addCount = () => {
    setCount(count+1);
  }

  //count-1
  const subCount = () => {
    setCount(count-1);
  }

  return (
    <div style={{padding:'20px'}}>
      <button onClick={addCount} style={{marginRight:'10px'}}>+1</button>
      <button onClick={subCount}>-1</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
