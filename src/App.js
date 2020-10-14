import React from 'react'
import Governance from './components/Governance'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Governance />
      </Router>
    </div>
  )
}

export default App
