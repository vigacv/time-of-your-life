import Clock from './components/Clock.js'
import SetClockProps from './components/SetClockProps.js'
import ClockProps from './components/ClockProps.js'
import './components/App.css'
import { useState } from 'react'

function App() {
  const [clockProps, setClockProps] = useState(new ClockProps())
  return (
    <div className="App">
      <Clock clockProps={clockProps} />
      <SetClockProps setClockProps={setClockProps} />
    </div>
  )
}

export default App
