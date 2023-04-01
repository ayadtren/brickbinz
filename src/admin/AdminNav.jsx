import React from "react";
import { Container, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../styles/admin-nav.scss";

const AdminNav = () => {
  const { authUser } = useAuth();

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
  );
};

export default AdminNav;
