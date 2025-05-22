import React, { useState } from 'react'
import './App.css'

function App() {
  const [employees, setEmployees] = useState(['John Doe', 'Jane Smith'])
  const [newEmployee, setNewEmployee] = useState('')
  const [showUpload, setShowUpload] = useState(false)

  const addEmployee = () => {
    if (newEmployee.trim()) {
      setEmployees([...employees, newEmployee])
      setNewEmployee('')
    }
  }

  const removeEmployee = (index) => {
    const updated = [...employees]
    updated.splice(index, 1)
    setEmployees(updated)
  }

  return (
    <div className="container">
      <header>
        <h1>HR Management Dashboard</h1>
      </header>

      <section className="card">
        <h2>Upload Resume</h2>
        <button onClick={() => setShowUpload(true)}>Upload Resume</button>
        {showUpload && (
          <div className="modal">
            <input type="file" />
            <button onClick={() => setShowUpload(false)}>Close</button>
          </div>
        )}
      </section>

      <section className="card">
        <h2>Employee Management</h2>
        <div className="controls">
          <input
            type="text"
            value={newEmployee}
            onChange={(e) => setNewEmployee(e.target.value)}
            placeholder="Enter employee name"
          />
          <button onClick={addEmployee}>Add</button>
        </div>
        <ul className="employee-list">
          {employees.map((emp, index) => (
            <li key={index}>
              {emp}
              <button onClick={() => removeEmployee(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
