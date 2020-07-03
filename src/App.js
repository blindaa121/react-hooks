import React, { useState } from 'react';
import './App.css';

const App = () => {
  // const [{count, count2}, setCount] = useState({count: 10, count2: 20});
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  return (
    <div className="App">
        <h1>Count 1: {count}</h1>
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <h1>Count 2: {count2}</h1>
        <button onClick={() => setCount2(c => c + 1)}>+</button>
     </div>
  )
    

}

export default App;
