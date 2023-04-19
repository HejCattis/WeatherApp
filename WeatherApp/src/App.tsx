import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  // console.log("Message from .env:" + import.meta.env.VITE_APIkey)
  return (
    <div>
      <h1>Cattis Väderapp</h1>
    </div>
  )
}

export default App
