import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, Mom</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          I Love {count} times but it never exceed yours.
        </button>
      </div>
    </>
  )
}

export default App
