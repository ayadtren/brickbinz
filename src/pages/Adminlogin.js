// Importing necessary modules and styles
import React, {useState} from "react";
import "./login.scss";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Defining a functional component named Login
export const Login = () => {
  // Defining state variables for username, admin_password, and loginStatus using the useState hook
  const [username, setUsername] = useState('');
  const [admin_password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState("");

  // Initializing a navigate constant using the useNavigate hook to redirect user to another page after a successful login
  const navigate = useNavigate();

  // Function to handle username change in the input field
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Function to handle password change in the input field
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to handle form submission when user clicks on submit button
  const loginn = async (event) => {
    event.preventDefault();
    // Sending an HTTP POST request to the server with username and admin_password data using the axios library
    axios.post("http://localhost:8000/login", {
      username: username,
      admin_password: admin_password,
    }, {
      headers: {'Content-Type': 'application/json'}
    }).then((response) => {
      // If server sends a message, set the loginStatus state variable to that message
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        // Otherwise, redirect user to the '/AdminNav/AddProducts' page using the navigate function
        navigate('/AdminNav/AddProducts')
      }
    })
  };

  // Rendering the login form with input fields, submit button, and message displaying the login status
  return (
    <div className="login-container">
        <form className="login-form">
          <h4>Login Here</h4>
          
          <input className="login-input" type="text" name="username" onChange={handleUsernameChange} placeholder="Enter your Username" required />
          
          <input className="login-input" type="password" name="password" onChange={handlePasswordChange} placeholder="Enter your Password" required />
          <input className="login-btn" type="submit" onClick={loginn} value="Login" />
          <h1 style={{color: 'blue', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
          <span>Forget Password or Username?</span> | <span>Sign Up</span>

        </form>
      </div>
  );
};

// Exporting the Login component as the default export
export default Login;
