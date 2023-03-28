import { Link } from "react-router-dom";
import React from "react";
import logo from "../images/banner2.png";
import AdminNav from "../admin/AdminNav";
import { useLocation } from "react-router-dom";
import Footer from "../pages/footer/Footer";

const Layout = (props) => {
  const location = useLocation();
  function Navigation() {
    return (
      <div>
        {location.pathname.startsWith("/dashboard") ? <AdminNav /> : null}
      </div>
    );
  }
  return (
    <div className="app">
      <nav className="nav">
        <div className="container">
          <div className="left">
            <div className="left-box">
              <Link to={"/home"}>
                {" "}
                <img className="logo-nav" src={logo} />
              </Link>
              <ul className="nav-list">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/AdminNav">Admin</Link>
                </li>
                <li>
                  <Link to={"/"}>Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/book">Book</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="right-box">
              <ul className="nav-list">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/viewCart">View Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main className="main">{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
