import { useState } from "react"

import "bootstrap/dist/css/bootstrap.min.css"

const App = (props) => {
  const [quoteId, setQuoteId] = useState(0)

  const updateQuoteId = () => {
    const newQuoteId = Math.floor(Math.random() * props.quotes.length)
    setQuoteId(newQuoteId)
  }

  return (
    <div className="container-fluid min-vh-100 bg-info d-flex align-items-center justify-content-center">
      <div className="card w-50">
        <div className="card-header">
          Quote
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0 text-center">
            <p>{props.quotes[quoteId].quote}</p>
            <footer className="blockquote-footer">{props.quotes[quoteId].author}</footer>
            <button className="btn btn-block btn-primary" onClick={updateQuoteId}>New Quote</button>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default App
