import React from "react";

export default function JobRoles({ employees, onBack }) {
  // Count employees by role
  const roleCounts = employees.reduce((acc, emp) => {
    acc[emp.role] = (acc[emp.role] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="dashboard">
      <button onClick={onBack}>⬅ Back</button>
      <h2>Job Roles Overview</h2>
      <div className="section" style={{ maxWidth: 400, margin: "2rem auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f4f6f8" }}>
              <th style={{ padding: "0.5rem" }}>Role</th>
              <th style={{ padding: "0.5rem" }}>Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(roleCounts).map(([role, count]) => (
              <tr key={role}>
                <td style={{ padding: "0.5rem" }}>{role}</td>
                <td style={{ padding: "0.5rem" }}>{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}