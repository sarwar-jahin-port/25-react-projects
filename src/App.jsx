import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Accordian } from './projects/accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* This is accordian project */}
      <Accordian/>
    </>
  )
}

export default App
