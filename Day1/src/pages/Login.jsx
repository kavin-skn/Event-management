import React, { useState } from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Predefined admin credentials
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    // Predefined user credentials
    const userUsername = 'user';
    const userPassword = 'user123';

    if (username && password && role) {
      setError('');

      if ((role === 'admin' && username === adminUsername && password === adminPassword) ||
          (role === 'user' && username === userUsername && password === userPassword)) {
        console.log(`Login successful! Username: ${username}, Role: ${role}`);
      } else {
        setError('Incorrect username or password.');
      }
    } else {
      setError('Please enter both username, password, and select a role.');
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="login-container">
        <center>
          <br />
          <h2>Login</h2>
        </center>
        <form>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>User Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="form-group">
            <br />
            <center>
              <Link to="/user">
              <button type="button" onClick={handleLogin}>
                Login
              </button></Link>
            </center>
            <br />
          </div>
          <p>Don't have an account? <Link to="/signup1">Sign Up</Link></p>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
