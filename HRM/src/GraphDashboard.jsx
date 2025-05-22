import React, { useState, useMemo } from "react";
import {
  ComposedChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer
} from "recharts";

// Helper: get unique months from employee salary dates, and always include the current month
function getMonthlyStats(employees) {
  const stats = {};
  const now = new Date();
  const currentMonth = now.toISOString().slice(0, 7); // "YYYY-MM"

  employees.forEach(e => {
    const month = e.date?.slice(0, 7); // "YYYY-MM"
    if (!month) return;
    if (!stats[month]) stats[month] = { employees: 0, salary: 0 };
    stats[month].employees += 1;
    stats[month].salary += e.salary || 0;
  });

  // Ensure current month is present and up-to-date
  if (!stats[currentMonth]) stats[currentMonth] = { employees: 0, salary: 0 };
  // Count employees whose date is <= current month
  stats[currentMonth].employees = employees.filter(e => (e.date?.slice(0, 7) <= currentMonth)).length;
  stats[currentMonth].salary = employees
    .filter(e => (e.date?.slice(0, 7) <= currentMonth))
    .reduce((sum, e) => sum + (e.salary || 0), 0);

  // Sort by month ascending
  return Object.entries(stats)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, val]) => ({
      month,
      employees: val.employees,
      salary: val.salary
    }));
}

export default function GraphDashboard({ employees, onBack }) {
  const [showBar, setShowBar] = useState(false);
  const monthlyStats = useMemo(() => getMonthlyStats(employees), [employees]);

  return (
    <div className="dashboard">
      <button onClick={onBack}>⬅ Back</button>
      <h2>Employee & Salary Trends</h2>
      <button onClick={() => setShowBar(!showBar)} style={{ marginBottom: 16 }}>
        {showBar ? "Show Line Graph" : "Show Bar Graph"}
      </button>
      <div style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
        <h4 style={{ textAlign: "center" }}>Employees & Salary Per Month</h4>
        <ResponsiveContainer width="100%" height={350}>
          {showBar ? (
            <ComposedChart data={monthlyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" label={{ value: "Employees", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: "Salary", angle: 90, position: "insideRight" }} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="employees" fill="#3498db" name="Employees" />
              <Bar yAxisId="right" dataKey="salary" fill="#2ecc71" name="Salary" />
            </ComposedChart>
          ) : (
            <ComposedChart data={monthlyStats}>
              <CartesianGrid stroke="#eee" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" label={{ value: "Employees", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: "Salary", angle: 90, position: "insideRight" }} />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="employees" stroke="#3498db" name="Employees" strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="salary" stroke="#2ecc71" name="Salary" strokeWidth={2} />
            </ComposedChart>
          )}
        </ResponsiveContainer>
      </div>
      <div style={{ marginTop: 24 }}>
        <b>Total Employees:</b> {employees.length} <br />
        <b>Total Salary Paid (Current Month):</b> $
        {monthlyStats.length
          ? monthlyStats[monthlyStats.length - 1].salary
          : 0}
      </div>
    </div>
  );
}