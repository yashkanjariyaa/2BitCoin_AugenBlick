import React, { useState } from "react";
import "../assets/style/auth.css";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:3000/api/auth";

const Login = ({ onSwitchToSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("user");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/${userType}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      // Handle successful login
      console.log("Login successful");
      localStorage.setItem("username", username);
      if (userType === "user") {
        // Redirect user to /home
        // You can replace '/home' with your desired route for users
        navigate("/home");
      } else if (userType === "admin") {
        // Redirect admin to /dashboard
        // You can replace '/dashboard' with your desired route for admins
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const handleUserTypeChange = (type) => {
    setUserType(type);
    console.log(type);
  };
  return (
    <div className="auth-container">
      <h2 className="auth-title">{userType === "admin" ? "Admin Login" : "User Login"}</h2>
      {error && <div className="auth-error">{error}</div>}
      <input
        className="auth-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-button" onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{" "}
        <button className="auth-switch-button" onClick={onSwitchToSignup}>Signup</button>
      </p>
      <p>
        Login as:
        <button
          className={`auth-type-button ${userType === "user" ? "active" : ""}`}
          onClick={() => handleUserTypeChange("user")}
          disabled={userType === "user"}
        >
          User
        </button>
        <button
          className={`auth-type-button ${userType === "admin" ? "active" : ""}`}
          onClick={() => handleUserTypeChange("admin")}
          disabled={userType === "admin"}
        >
          Admin
        </button>
      </p>
    </div>
  );
}

const Signup = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("user");

  const handleSignup = async () => {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, userType }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }
      localStorage.setItem("userLoggedIn", username);
      // Handle successful signup
      console.log("Signup successful");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    console.log(type);
  };

  return (
      <div className="auth-container">
        <h2 className="auth-title">{userType === "admin" ? "Admin Signup" : "User Signup"}</h2>
        {error && <div className="auth-error">{error}</div>}
        <input
          className="auth-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleSignup}>Signup</button>
        <p>
          Already have an account?{" "}
          <button className="auth-switch-button" onClick={onSwitchToLogin}>Login</button>
        </p>
        <p>Signup as:</p>
        <button
          className={`auth-type-button ${userType === "user" ? "active" : ""}`}
          onClick={() => handleUserTypeChange("user")}
          disabled={userType === "user"}
        >
          User
        </button>
        <button
          className={`auth-type-button ${userType === "admin" ? "active" : ""}`}
          onClick={() => handleUserTypeChange("admin")}
          disabled={userType === "admin"}
        >
          Admin
        </button>
      </div>
    );
};

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  const switchToSignup = () => {
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
      {showLogin ? (
        <Login onSwitchToSignup={switchToSignup} />
      ) : (
        <Signup onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
}
