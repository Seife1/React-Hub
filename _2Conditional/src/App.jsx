import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <h1>{count % 2 !== 0 ? "Hello" : "Hello, Eden"}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
