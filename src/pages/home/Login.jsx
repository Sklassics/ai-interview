import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      setError('');
      const response = await fetch(
        'https://c91f-2a02-4780-12-36cd-00-1.ngrok-free.app/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ username, password }).toString(),
        }
      );

      if (!response.ok) {
        throw new Error(Server responded with ${response.status});
      }

      const data = await response.json();

      // Adjust based on your API's success criteria
      if (data.success) {
        alert('Login Successful!');
      } else {
        setError(data.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2 className="login-title">Login</h2>
          {error && <p className="login-error">{error}</p>}

          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <div className="login-image-bg"></div>
    </div>
  );
};

export default Login;