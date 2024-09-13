import React from 'react';
import './Login.css';

function Login() {
  return (
    <main className="login-container">
      <div className="login-box">
        <h1>Login</h1>

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

      </div>
    </main>
  );
}

export default Login;