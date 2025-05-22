import React, { useState } from "react";

const months = ["January", "February", "March", "April", "May", "June"];

export default function EmployeeHistory({ employees, firedEmployees, onBack }) {
  const [selectedMonth, setSelectedMonth] = useState(months[new Date().getMonth() % months.length]);

  return (
    <div className="dashboard">
      <button onClick={onBack}>⬅ Back</button>
      <h2>Employee History</h2>
      <label>
        Select Month:{" "}
        <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}>
          {months.map(m => <option key={m}>{m}</option>)}
        </select>
      </label>
      <div className="section" style={{ marginTop: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f4f6f8" }}>
              <th style={{ padding: "0.5rem" }}>Photo</th>
              <th style={{ padding: "0.5rem" }}>Name</th>
              <th style={{ padding: "0.5rem" }}>Role</th>
              <th style={{ padding: "0.5rem" }}>Status</th>
              <th style={{ padding: "0.5rem" }}>Salary Paid</th>
              <th style={{ padding: "0.5rem" }}>Fired At</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>
                  <img src={emp.photo} alt={emp.name} style={{ width: 40, height: 40, borderRadius: "50%" }} />
                </td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>
                  <span style={{ color: "#27ae60", fontWeight: "bold" }}>Present</span>
                </td>
                <td>
                  <span style={{ color: "#2980b9" }}>${emp.salary}</span>
                </td>
                <td>-</td>
              </tr>
            ))}
            {firedEmployees.map(emp => (
              <tr key={emp.id + "-fired"}>
                <td>
                  <img src={emp.photo} alt={emp.name} style={{ width: 40, height: 40, borderRadius: "50%" }} />
                </td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>
                  <span style={{ color: "#e74c3c", fontWeight: "bold" }}>Fired</span>
                </td>
                <td>-</td>
                <td>
                  {emp.firedAt
                    ? new Date(emp.firedAt).toLocaleString()
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}