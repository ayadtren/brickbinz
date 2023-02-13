import React from "react";
import "./login.scss";

export const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input
          className="login-input"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="login-btn">Login</button>
        <span>Forget Password or Username?</span> | <span>Sign Up</span>
      </form>
    </div>
  );
};

export default Login;