import React, { useState } from 'react'
import ResumeSection from './ResumeSection'
import EmployeeSection from './EmployeeSection'
import './App.css'

function App() {
  const [view, setView] = useState(null)

  return (
    <div className="container">
      <header>
        <h1>HR Dashboard</h1>
        <div className="menu">
          <button onClick={() => setView('resume')}>Upload Resume</button>
          <button onClick={() => setView('employee')}>Employee Details</button>
        </div>
      </header>
      {view === 'resume' && <ResumeSection />}
      {view === 'employee' && <EmployeeSection />}
    </div>
  )
}

export default App
