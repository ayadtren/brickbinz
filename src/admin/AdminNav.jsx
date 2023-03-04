import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import "../styles/admin-nav.scss";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-Products",
    path: "/dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
  {
    display: "Add-Product",
    path: "/AdminNav/AddProducts",
  },
];
const AdminNav = () => {
  const { authUser } = useAuth();

  return (
    <div>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2>Brickbin</h2>
              </div>

              <div className="search__box"></div>
              <input type="text" placeholder="Search...." />
              <span>
                <i className="ri-search-line"></i>
              </span>
              <div className="admin__nav-top-right">
                <span>
                  <i className="ri-notification-3-line"></i>
                  <span>
                    <i className="ri-setings-2-line"></i>
                  </span>
                  <img src="images/logo.png" alt="logo" />
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
        <Outlet />
      </section>
    </div>
  );
};

export default AdminNav;
