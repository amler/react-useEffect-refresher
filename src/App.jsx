import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCounter from './SimpleCounter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleCounter/>
    </>
  )
}

export default App
