import { useState } from "react"

const App = () => {
  const [total, setTotal] = useState(2100)
  const startTimer = () => {
    setInterval(() => setTotal(total - 1), 1000)
  }

  return (
    <div>
      <h1>Pomodoro</h1>
      <h2>{total}</h2>
      <button onClick={startTimer}>Start countdown</button>
    </div>
  )
}

export default App