import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingBag } from "react-icons/fa";
import { MdMenu, MdPersonPin } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import AdminNav from "../admin/AdminNav";
import logo from "../images/banner2.png";
import Login from "../pages/Adminlogin";
import Footer from "../pages/footer/Footer";
import axios from "axios";

const Layout = (props) => {
  const location = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleClose = () => {
    setShowDrawer(false);
  };
  const handleOpen = () => {
    setShowDrawer(true);
  };

  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClose = () => {
    setShowLogin(false);
  };
  const handleLoginOpen = () => {
    setShowLogin(true);
  };

  useEffect(() => {
    const fetchAllCartItems = async () => {
      try {
        const res = await axios.get("http://localhost:8000/cart");
        setCartItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCartItems();
  }, []);

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
              <button onClick={handleOpen} className="menu-button">
                <MdMenu size={32} />
              </button>
              <Link className="logo-link" to={"/"}>
                <img className="logo-nav" src={logo} />
              </Link>
              <ul className="nav-list">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li hidden>
                  <Link to="/AdminNav/Dashboard">Admin</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/ticket">Ticket</Link>
                </li>
                <li>
                  <Link to="/book">Book</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                {/* <li>
                  <Link to="/Checkout">Checkout</Link>
                </li> */}
                <li>
                  <Link to="/OrderCon">OrderCon</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="right-box">
              <ul className="nav-list">
                <li hidden>
                  <button
                    onClick={handleLoginOpen}
                    className="icon-button"
                    to="/login"
                    style={{
                      border: 0,
                      outline: 0,
                      backgroundColor: "transparent",
                    }}
                  >
                    <MdPersonPin size={28} />
                  </button>
                </li>
                <li>
                  <Link className="icon-button" to={`/Viewcart`}>
                    <FaShoppingBag /> <p>{cartItems.length}</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Offcanvas show={showDrawer} onHide={handleClose}>
        <Offcanvas.Header>
          <Link to={"/"}>
            <img className="logo-nav-drawer" src={logo} />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="drawer-nav-list">
            <li onClick={handleClose}>
              <Link to={"/"}>Home</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/AdminNav/Dashboard">Admin</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/shop">Shop</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/ticket">Ticket</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/book">Book</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/product">Product</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/OrderCon">OrderCon</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Modal show={showLogin} onHide={handleLoginClose}>
        <div
          style={{
            boxShadow: "0 0 50px 15px #fdd201",
            backgroundColor: "transparent",
            borderRadius: 8,
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login></Login>
          </Modal.Body>
        </div>
      </Modal>

      <main className="main">{props.children}</main>
      <footer className="Footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
