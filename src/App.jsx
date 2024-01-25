import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { add } from './utils/helper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>
      hello
    </h1>
    <span data-testid="mySpanId">Hello</span>
    <span data-testid="span" >{count}dd</span>
    <input type="text"></input>
    <button onClick={
      ()=>setCount((prev)=>prev+1)
    }>submit
    </button>

     </div>
  )
}

export default App
