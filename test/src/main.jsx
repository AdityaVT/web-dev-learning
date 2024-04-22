import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

const quotes = [
  {
    id: 1,
    quote: "You should perform your duty with a view to guide people and for universal welfare.",
    author: "Bhagavat Gita"
  },
  {
    id: 2,
    quote: "Sever the ignorant doubt in your heart with the sword of self-knowledge. Observe your discipline. Arise.",
    author: "Bhagavat Gita"
  },
  {
    id: 3,
    quote: "Man is made by his belief. As he believes, so he is.",
    author: "Bhagavat Gita"
  },
  {
    id: 4,
    quote: "A Karma-yogi performs action by body, mind, intellect, and senses, without attachment, only for self-purification.",
    author: "Bhagavat Gita"
  },
  {
    id: 5,
    quote: "Death is as sure for that which is born, as birth is for that which is dead. Therefore, grieve not for what is inevitable.",
    author: "Bhagavat Gita"
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App quotes={quotes} />
)
