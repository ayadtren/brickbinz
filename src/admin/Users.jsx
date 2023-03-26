import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "../styles/admin-nav.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const admin__nav = [
    { path: "/admin/Dashboard", display: "Dashboard" },
    { path: "/admin/AllProducts", display: "Products" },
    { path: "/admin/Orders", display: "Orders" },
    { path: "/admin/Users", display: "Users" },
  ];

  useEffect(() => {
    // Fetch users from database
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2>Brickbin</h2>
              </div>
              <div className="search__box">
                <input type="text" placeholder="Search...." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className="admin__nav-top-right">
                <span>
                  <i className="ri-notification-3-line"></i>
                  <span>
                    <i className="ri-setings-2-line"></i>
                  </span>
                  <img src="images/banner2.png" alt="logo" />
                </span>
              </div>
            </div>
          </Container>
        </div>
      </header>

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
        <Container>
          <h3>Users</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>
    </div>
  );
};

export default Users;
