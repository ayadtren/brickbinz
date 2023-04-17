import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";
import AuthContext from "../auth/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [admin_password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const loginn = async (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/login",
        {
          username: username,
          admin_password: admin_password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setIsLoggedIn(true);
          navigate("/AdminNav/Dashboard");
        }
      });
    setShowLogin(false); // hide the form after login
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <input
          className="login-input"
          type="text"
          name="username"
          onChange={handleUsernameChange}
          placeholder="Enter Admin Name"
          required
        />
        <input
          className="login-input"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          placeholder="Enter your Password"
          required
        />
        <input
          className="login-btn"
          type="submit"
          onClick={loginn}
          value="Login"

        />
        <h6 className="loginstatus">{loginStatus}</h6>
        <span>Forget Password or Username?</span> | <span>Please contact website makers</span>
      </form>
    </div>
  );
};

export default Login;

