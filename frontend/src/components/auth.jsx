import React, { useState } from 'react';

const API_URL = 'http://your-backend-url.com';

const Login = ({ onSwitchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userType, setUserType] = useState('user');

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/${userType}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      // Handle successful login
      console.log('Login successful');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>{userType === 'admin' ? 'Admin Login' : 'User Login'}</h2>
      {error && <div>{error}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <button onClick={onSwitchToSignup}>Signup</button>
      </p>
      <p>
        Login as:
        <button onClick={() => setUserType('user')} disabled={userType === 'user'}>
          User
        </button>
        <button onClick={() => setUserType('admin')} disabled={userType === 'admin'}>
          Admin
        </button>
      </p>
    </div>
  );
};

const Signup = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      // Handle successful signup
      console.log('Signup successful');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>User Signup</h2>
      {error && <div>{error}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already have an account? <button onClick={onSwitchToLogin}>Login</button>
      </p>
    </div>
  );
};

export default function App() {
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
