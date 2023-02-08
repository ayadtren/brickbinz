import { Link } from "react-router-dom";
import React from "react";
import logo from "../images/banner2.png";

const Layout = (props) => {
  return (
    <div className="app">
      <nav className="nav">
        <div className="container">
          <div className="left">
            <div className="left-box">
              <img className="logo-nav" src={logo} />
              <ul className="nav-list">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/book">Book</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </nav>
      <main className="main">{props.children}</main>
      <footer>
        <div></div>
      </footer>
    </div>
  );
};

export default Layout;
