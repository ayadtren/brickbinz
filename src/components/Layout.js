import React from "react";
import logo from "../images/brickbinbanner.png";

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
                  <a href={"/"}>Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/book">Book</a>
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
