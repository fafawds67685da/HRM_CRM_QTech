import React from "react";
import "./Home.css";

export default function Home({ onNavigate }) {
  return (
    <div className="home-container">
      <h1>HR Dashboard</h1>
      <div className="button-grid">
        <button className="home-btn" onClick={() => onNavigate("graph")}>
          📊 Update Graph
        </button>
        <button className="home-btn" onClick={() => onNavigate("management")}>
          👥 Employee Management
        </button>
        <button className="home-btn" onClick={() => onNavigate("history")}>
          📅 Employee History
        </button>
        <button className="home-btn" onClick={() => onNavigate("salary")}>
          💳 Salary Card
        </button>
        <button className="home-btn" onClick={() => onNavigate("roles")}>
          🏷️ Job Roles
        </button>
      </div>
    </div>
  );
}