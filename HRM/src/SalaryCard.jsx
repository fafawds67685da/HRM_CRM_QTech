import React, { useState } from "react";

function getNextSalaryDate(lastDate) {
  const d = new Date(lastDate);
  d.setMonth(d.getMonth() + 1);
  return d.toISOString().slice(0, 10);
}

function getSalaryHistory(employee) {
  const history = [];
  let date = new Date(employee.date);
  for (let i = 2; i >= 1; i--) {
    const past = new Date(date);
    past.setMonth(past.getMonth() - i);
    history.push({
      type: "past",
      date: past.toISOString().slice(0, 10),
      paid: false
    });
  }
  history.push({
    type: "current",
    date: date.toISOString().slice(0, 10),
    paid: true
  });
  for (let i = 1; i <= 2; i++) {
    const future = new Date(date);
    future.setMonth(future.getMonth() + i);
    history.push({
      type: "future",
      date: future.toISOString().slice(0, 10),
      paid: false
    });
  }
  return history;
}

export default function SalaryCard({ employees, updateEmployee, interest, setInterest, onBack }) {
  const [selected, setSelected] = useState(employees[0]?.id || null);
  const [editPercent, setEditPercent] = useState("");
  const [editingInterest, setEditingInterest] = useState(false);
  const [interestInput, setInterestInput] = useState(interest);

  if (!employees.length) return (
    <div className="dashboard">
      <button onClick={onBack}>⬅ Back</button>
      <h2>Salary Card</h2>
      <p>No employees available.</p>
    </div>
  );

  const emp = employees.find(e => e.id === selected) || employees[0];
  const salaryHistory = getSalaryHistory(emp);

  const handlePromotion = (type) => {
    const percent = parseFloat(editPercent);
    if (isNaN(percent) || percent === 0) return;
    let newSalary = emp.salary;
    if (type === "promotion") newSalary = Math.round(emp.salary * (1 + percent / 100));
    if (type === "demotion") newSalary = Math.round(emp.salary * (1 - percent / 100));
    updateEmployee(emp.id, { salary: newSalary });
    setEditPercent("");
  };

  const handleInterestSave = () => {
    setInterest(Number(interestInput));
    setEditingInterest(false);
  };

  return (
    <div className="dashboard">
      <button onClick={onBack}>⬅ Back</button>
      <h2>Salary Card</h2>
      <div style={{ marginBottom: "1rem" }}>
        <b>Interest on Salary:</b>{" "}
        {editingInterest ? (
          <>
            <input
              type="number"
              value={interestInput}
              onChange={e => setInterestInput(e.target.value)}
              style={{ width: 60 }}
            />%
            <button onClick={handleInterestSave}>Save</button>
            <button onClick={() => setEditingInterest(false)}>Cancel</button>
          </>
        ) : (
          <>
            <span style={{ color: "#27ae60" }}>{interest}%</span>
            <button style={{ marginLeft: 8 }} onClick={() => setEditingInterest(true)}>Edit</button>
          </>
        )}
      </div>
      <label>
        Select Employee:{" "}
        <select value={emp.id} onChange={e => setSelected(Number(e.target.value))}>
          {employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
        </select>
      </label>
      <div
        className="section"
        style={{
          maxWidth: 500,
          margin: "2rem auto",
          textAlign: "center",
          borderRadius: "18px",
          boxShadow: "0 4px 16px rgba(52,152,219,0.12)",
          padding: "2rem"
        }}
      >
        <img
          src={emp.photo}
          alt={emp.name}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1rem",
            border: "4px solid #3498db"
          }}
        />
        <h3 style={{ margin: "0.5rem 0" }}>{emp.name}</h3>
        <p style={{ fontWeight: "bold", color: "#2980b9" }}>{emp.title} ({emp.role})</p>
        <p><b>Skills:</b> {emp.skills.join(", ")}</p>
        <p><b>Email:</b> {emp.email}</p>
        <p><b>Phone:</b> {emp.phone}</p>
        <p><b>Address:</b> {emp.address}</p>
        <p style={{ fontStyle: "italic" }}>{emp.about}</p>
        <div style={{ fontSize: "1.1rem", margin: "1rem 0" }}>
          <p>
            <b>Salary:</b> <span style={{ color: "#27ae60" }}>${emp.salary}</span>
          </p>
          <p>
            <b>Date Paid:</b> {emp.date}
          </p>
          <p>
            <b>Tax Deducted:</b> <span style={{ color: "#e67e22" }}>${emp.tax}</span>
          </p>
          <p>
            <b>Fund Deducted:</b> <span style={{ color: "#e67e22" }}>${emp.fund}</span>
          </p>
          <hr style={{ margin: "1rem 0" }} />
          <p style={{ fontSize: "1.2rem" }}>
            <b>Net Paid:</b>{" "}
            <span style={{ color: "#2980b9" }}>
              ${emp.salary - emp.tax - emp.fund}
            </span>
          </p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <input
            type="number"
            placeholder="Percent"
            value={editPercent}
            onChange={e => setEditPercent(e.target.value)}
            style={{ width: 80, marginRight: 8 }}
          />
          <button onClick={() => handlePromotion("promotion")}>Promote</button>
          <button onClick={() => handlePromotion("demotion")} style={{ marginLeft: 8, background: "#e67e22" }}>
            Demote
          </button>
        </div>
      </div>
      <div className="section" style={{ maxWidth: 700, margin: "2rem auto" }}>
        <h3>Salary Calendar for {emp.name}</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f4f6f8" }}>
              <th style={{ padding: "0.5rem" }}>Month</th>
              <th style={{ padding: "0.5rem" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {salaryHistory.map((row, idx) => (
              <tr key={row.date}>
                <td style={{ padding: "0.5rem" }}>{row.date}</td>
                <td style={{ padding: "0.5rem" }}>
                  {row.type === "past" && <span style={{ color: "#aaa" }}>Not Paid</span>}
                  {row.type === "current" && <span style={{ color: "#27ae60", fontWeight: "bold" }}>Paid</span>}
                  {row.type === "future" && <span style={{ color: "#2980b9" }}>Upcoming</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}