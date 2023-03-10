import { useState } from 'react'
import './App.css'
import { Statistics } from './components/Statistics/Statistics'

function App() {
  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] = useState(0)

  return (
    <div className="App">
      <h1>Give feedback</h1>
      <button onClick={() => setGoodCount(goodCount + 1)}>good</button>
      <button onClick={() => setNeutralCount(neutralCount + 1)}>neutral</button>
      <button onClick={() => setBadCount(badCount + 1)}>bad</button>
      <Statistics goodCount={goodCount} neutralCount={neutralCount} badCount={badCount} />
    </div>
  )
}

export default App
