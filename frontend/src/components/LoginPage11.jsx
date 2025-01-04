import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage11() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple hardcoded authentication for demonstration
    if (username === "admin" && password === "12345") {
      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify({ username }));

      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
