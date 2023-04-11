
import { Container, Row } from "react-bootstrap";
import { NavLink, Outlet, Location } from "react-router-dom";
import "../styles/admin-nav.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";



const AdminNav = () => {
  const [username, setUsername] = useState("");
  const [admin_password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 

  const handleLogin = (event) => {
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
          setIsAdmin(true);
          navigate("/AdminNav/Dashboard");
        }
      });
  };


  const admin__nav = [
    {
      display: "Dashboard",
      path: "/AdminNav/Dashboard",
    },
    {
      display: "All-Products",
      path: "/AdminNav/AllProducts",
    },
    {
      display: "Orders",
      path: "/AdminNav/Orders",
    },
    {
      display: "Users",
      path: "/AdminNav/users",
    },
    {
      display: "Add-Product",
      path: "/AdminNav/AddProducts",
    },
    {
      display: "Add slideshow image",
      path: "/AdminNav/AddImage",
    },
    {
      display: "View Events",
      path: "/AdminNav/ViewEvents",
    },
  ];
  

  
  return (
    <div className="login-container">
    {isAdmin ? (
    <div>
    <section className="admin__menu p-0">
      <Container>
        <Row>
          <div className="admin__navigation">
            <ul className="admin__menu-list">
              {admin__nav.map((item, index) => (
                <li className="admin__menu-item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "active__admin-menu" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Row>
      </Container>
    </section>

    <section>
      <Outlet adminNav={admin__nav} />
    </section>
  </div>
    ) : (
      <form className="login-form">
          <input
            className="login-input"
            type="text"
            name="username"
            onChange={handleUsernameChange}
            placeholder="Enter Admin username"
            required
          />
          <input
            className="login-input"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            placeholder="Enter Admin Password"
            required
          />
          <input
            className="login-btn"
            type="submit"
            onClick={handleLogin}
            value="Login"
          />
          <h6 className="loginstatus">{loginStatus}</h6>
          <span>Only for Admin to Login</span> 
        </form>
    )}
  </div>
  );
};

export default AdminNav;
