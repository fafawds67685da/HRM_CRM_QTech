import React, { useState } from "react";
import Home from "./Home";
import EmployeeManagement from "./EmployeeManagement";
import EmployeeHistory from "./EmployeeHistory";
import SalaryCard from "./SalaryCard";
import GraphDashboard from "./GraphDashboard";
import JobRoles from "./JobRoles";
import "./App.css";

const initialEmployees = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "Frontend Developer",
    role: "Senior Developer",
    skills: ["React", "JavaScript", "CSS"],
    email: "john.doe@email.com",
    phone: "555-1234",
    address: "123 Main St, City",
    about: "Passionate about UI/UX and frontend technologies.",
    salary: 3000,
    date: "2025-05-01",
    tax: 300,
    fund: 100
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Backend Developer",
    role: "Junior Developer",
    skills: ["Node.js", "Express", "MongoDB"],
    email: "jane.smith@email.com",
    phone: "555-5678",
    address: "456 Elm St, City",
    about: "Loves building scalable backend systems.",
    salary: 3200,
    date: "2025-05-01",
    tax: 320,
    fund: 120
  },
  {
    id: 3,
    name: "Alice Johnson",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "HR Manager",
    role: "HR",
    skills: ["Recruitment", "Communication", "Payroll"],
    email: "alice.j@email.com",
    phone: "555-9012",
    address: "789 Oak St, City",
    about: "Ensures a healthy and productive workplace.",
    salary: 3100,
    date: "2025-05-01",
    tax: 310,
    fund: 110
  }
];

export default function App() {
  const [page, setPage] = useState("home");
  const [employees, setEmployees] = useState(initialEmployees);
  const [firedEmployees, setFiredEmployees] = useState([]);
  const [interest, setInterest] = useState(5); // percent

  // Add, edit, remove employee handlers
  const addEmployee = (emp) => setEmployees([...employees, emp]);
  const updateEmployee = (id, updated) =>
    setEmployees(employees.map(e => e.id === id ? { ...e, ...updated } : e));
  const removeEmployee = (id) => {
    const fired = employees.find(e => e.id === id);
    if (fired) {
      setFiredEmployees([
        ...firedEmployees,
        {
          ...fired,
          firedAt: new Date().toISOString()
        }
      ]);
    }
    setEmployees(employees.filter(e => e.id !== id));
  };

  return (
    <div>
      {page === "home" && <Home onNavigate={setPage} />}
      {page === "graph" && (
        <GraphDashboard
          employees={employees}
          onBack={() => setPage("home")}
        />
      )}
      {page === "management" && (
        <EmployeeManagement
          employees={employees}
          addEmployee={addEmployee}
          updateEmployee={updateEmployee}
          removeEmployee={removeEmployee}
          onBack={() => setPage("home")}
        />
      )}
      {page === "history" && (
        <EmployeeHistory
          employees={employees}
          firedEmployees={firedEmployees}
          onBack={() => setPage("home")}
        />
      )}
      {page === "salary" && (
        <SalaryCard
          employees={employees}
          updateEmployee={updateEmployee}
          interest={interest}
          setInterest={setInterest}
          onBack={() => setPage("home")}
        />
      )}
      {page === "roles" && (
        <JobRoles
          employees={employees}
          onBack={() => setPage("home")}
        />
      )}
    </div>
  );
}
