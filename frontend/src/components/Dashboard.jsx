import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("user");
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Welcome, {user?.username}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
