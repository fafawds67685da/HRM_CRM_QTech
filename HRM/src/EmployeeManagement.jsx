import React, { useState } from "react";

const predefinedRoles = [
  "Senior Developer",
  "Junior Developer",
  "Backend Developer",
  "Frontend Developer",
  "HR",
  "QA Engineer",
  "Designer"
];

export default function EmployeeManagement({
  employees,
  addEmployee,
  updateEmployee,
  removeEmployee,
  onBack
}) {
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: "",
    photo: "",
    title: "",
    role: predefinedRoles[0],
    customRole: "",
    skills: "",
    email: "",
    phone: "",
    address: "",
    about: ""
  });

  const handleEdit = (emp) => {
    setEditing(emp.id);
    setForm({
      ...emp,
      skills: emp.skills.join(", "),
      customRole: ""
    });
  };

  const handleDelete = (id) => {
    removeEmployee(id);
    if (editing === id) setEditing(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setForm({ ...form, role: e.target.value, customRole: "" });
  };

  const handleSave = () => {
    const role = form.role === "Custom" ? form.customRole : form.role;
    if (editing) {
      updateEmployee(editing, {
        ...form,
        role,
        skills: form.skills.split(",").map(s => s.trim())
      });
      setEditing(null);
    } else {
      const salary = Number(window.prompt("Enter starting salary for this employee:"));
      if (!salary) return;
      addEmployee({
        ...form,
        id: Date.now(),
        role,
        skills: form.skills.split(",").map(s => s.trim()),
        photo: form.photo || "https://randomuser.me/api/portraits/lego/1.jpg",
        salary,
        date: new Date().toISOString().slice(0, 10),
        tax: Math.round(salary * 0.1),
        fund: Math.round(salary * 0.03)
      });
    }
    setForm({
      name: "",
      photo: "",
      title: "",
      role: predefinedRoles[0],
      customRole: "",
      skills: "",
      email: "",
      phone: "",
      address: "",
      about: ""
    });
  };

  return (
    <div className="dashboard">
      <button onClick={onBack}>⬅ Back</button>
      <h2>Employee Management</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {employees.map(emp => (
          <div
            key={emp.id}
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 4px 16px rgba(52,152,219,0.12)",
              padding: "2rem",
              minWidth: "340px",
              maxWidth: "360px",
              flex: "1 1 340px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem"
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
            <p style={{ fontWeight: "bold", color: "#2980b9" }}>{emp.title}</p>
            <p><b>Role:</b> {emp.role}</p>
            <p><b>Skills:</b> {emp.skills.join(", ")}</p>
            <p><b>Email:</b> {emp.email}</p>
            <p><b>Phone:</b> {emp.phone}</p>
            <p><b>Address:</b> {emp.address}</p>
            <p style={{ fontStyle: "italic" }}>{emp.about}</p>
            <div style={{ marginTop: "1rem" }}>
              <button onClick={() => handleEdit(emp)}>Edit</button>
              <button style={{ background: "#e74c3c", marginLeft: "0.5rem" }} onClick={() => handleDelete(emp.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="section" style={{ maxWidth: 500, margin: "2rem auto" }}>
        <h3>{editing ? "Edit Employee" : "Add New Employee"}</h3>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="photo" placeholder="Photo URL" value={form.photo} onChange={handleChange} />
        <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} />
        <label>
          Role:{" "}
          <select name="role" value={form.role} onChange={handleRoleChange}>
            {predefinedRoles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
            <option value="Custom">Custom</option>
          </select>
        </label>
        {form.role === "Custom" && (
          <input name="customRole" placeholder="Custom Role" value={form.customRole} onChange={handleChange} />
        )}
        <input name="skills" placeholder="Skills (comma separated)" value={form.skills} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
        <textarea name="about" placeholder="About" value={form.about} onChange={handleChange} />
        <button onClick={handleSave}>{editing ? "Save Changes" : "Add Employee"}</button>
        {editing && (
          <button style={{ marginLeft: "1rem", background: "#95a5a6" }} onClick={() => setEditing(null)}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}