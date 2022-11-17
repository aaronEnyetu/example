import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increase}>Increase</button>
      {count}
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default App;
