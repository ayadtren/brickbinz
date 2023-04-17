import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingBag } from "react-icons/fa";
import { MdMenu, MdPersonPin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import AdminNav from "../admin/AdminNav";
import { useAuth } from "../auth/useAuth";
import logo from "../images/banner2.png";
import Login from "../pages/Adminlogin";
import Footer from "../pages/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLogin from "../pages/Adminlogin";
import { useCart } from "../CartContext";

const Layout = (props) => {
  //const location = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { isLoggedIn, logOut } = useAuth();
  const navigate = useNavigate();
  const { cartQuantity, fetchCartQuantity } = useCart();

  useEffect(() => {
    fetchCartQuantity();
  }, []);

  console.log("Log: ~ file: Layout.jsx:20 ~ Layout ~ isLoggedIn:", isLoggedIn);

  const handleLogout = () => {
    navigate("/");
    logOut();
  };

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
    navigate("/login");
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

  // function Navigation() {
  //   return (
  //     <div>
  //       {location.pathname.startsWith("/dashboard") ? <AdminNav /> : null}
  //     </div>
  //   );
  // }
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
                <img className="logo-nav" src={logo} alt="navbarlogo" />
              </Link>
              <ul className="nav-list">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li hidden={!isLoggedIn}>
                  <Link to="/AdminNav/Dashboard">Admin</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/ticket">Contact</Link>
                </li>
                <li>
                  <Link to="/book">Book</Link>
                </li>
                <li hidden>
                  <Link to="/product">Product</Link>
                </li>
                {/* <li>
                  <Link to="/Checkout">Checkout</Link>
                </li> */}
                <li hidden>
                  <Link to="/OrderCon">OrderCon</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="right-box">
              <ul className="nav-list">
                <li>
                  {isLoggedIn && (
                    <li>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </li>
                  )}
                  <button
                    onClick={handleLoginOpen}
                    className="icon-button"
                  
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
                    <FaShoppingBag /> <p>{cartQuantity}</p>
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
            <img className="logo-nav-drawer" src={logo} alt="navdrawer" />
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
              <Link to="/ticket">Contact</Link>
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
            <Login onLoginSuccess={handleLoginClose}></Login>
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
