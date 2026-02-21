import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskIntake from './components/taskIntake'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskIntake />
    </>
  )
}

export default App
