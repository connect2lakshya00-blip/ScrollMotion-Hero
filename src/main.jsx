import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap layout utilities
import App from './App.jsx'
import './index.css' // Tailwind + custom (loaded after Bootstrap so Tailwind wins on conflicts)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
