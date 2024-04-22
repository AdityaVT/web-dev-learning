import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState('')
  const [rates, setRates] = useState({})
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    console.log('fetching exchange rates...')

    if (currency) {

    }
  })

  return (
    <div>
      
    </div>
  )
}

export default App
