import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const initialStats = [
  { month: 'Jan', joined: 3, left: 1 },
  { month: 'Feb', joined: 2, left: 0 },
  { month: 'Mar', joined: 4, left: 1 },
  { month: 'Apr', joined: 1, left: 2 }
]

function EmployeeSection() {
  const [stats, setStats] = useState(initialStats)
  const [employees, setEmployees] = useState(['Alice', 'Bob', 'Charlie'])
  const [newEmployee, setNewEmployee] = useState('')
  const [showList, setShowList] = useState(false)

  const currentMonth = new Date().toLocaleString('default', { month: 'short' })

  const addEmployee = () => {
    if (newEmployee.trim()) {
      setEmployees([...employees, newEmployee])
      const updatedStats = stats.map(item =>
        item.month === currentMonth ? { ...item, joined: item.joined + 1 } : item
      )
      setStats(updatedStats)
      setNewEmployee('')
    }
  }

  const removeEmployee = (index) => {
    const name = employees[index]
    const updated = [...employees]
    updated.splice(index, 1)
    const updatedStats = stats.map(item =>
      item.month === currentMonth ? { ...item, left: item.left + 1 } : item
    )
    setEmployees(updated)
    setStats(updatedStats)
  }

  return (
    <div className="card">
      <h2>Employee Analytics</h2>
      <p>Current Active Employees: {employees.length}</p>

      <BarChart width={500} height={300} data={stats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="joined" fill="#82ca9d" />
        <Bar dataKey="left" fill="#f87171" />
      </BarChart>

      <div className="controls">
        <input
          type="text"
          value={newEmployee}
          onChange={(e) => setNewEmployee(e.target.value)}
          placeholder="Add employee"
        />
        <button onClick={addEmployee}>Add</button>
        <button onClick={() => setShowList(!showList)}>
          {showList ? 'Hide' : 'View'} Employee List
        </button>
      </div>

      {showList && (
        <ul className="employee-list">
          {employees.map((emp, index) => (
            <li key={index}>
              {emp} <button onClick={() => removeEmployee(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default EmployeeSection
