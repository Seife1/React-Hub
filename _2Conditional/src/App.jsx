import { useState } from 'react';
import './App.css';

import elul from '../../Assets/elul.jpg';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <h1>{(count % 2 !== 0) ? "Hello, Eden" : (<img src= {elul} alt="image" />)}</h1>
        <caption>{(count % 2 === 0) ? "Eden Sisay" : " "}</caption>
        <button onClick={() => setCount((count) => count + 1)}>
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
