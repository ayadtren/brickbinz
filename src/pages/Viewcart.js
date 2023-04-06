import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { MdAdd, MdDelete, MdRemove } from "react-icons/md";
import "../styles/Viewcart.scss";

export const formatNumberWithCommas = (string) => {
  if (!string) return "";
  const n = string;
  const p = n.indexOf(".");
  return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
    p < 0 || i < p ? `${m},` : m
  );
};

export const roundMoneyNum = (amount) => {
  if (!amount) return 0;
  //always rounds a number up to the next largest whole number or integer.
  return (Math.round((amount + Number.EPSILON) * 100) / 100).toString();
};

function Viewcart() {
  const [cartItems, setCartItems] = useState([]);
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

  const handleDelete = (cart_set_numb) => async (e) => {
    try {
      await axios.delete("http://localhost:8000/cart/" + cart_set_numb);
      window.location.reload();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleAdd = (cartItem) => async (e) => {
    try {
      const newCartItem = { ...cartItem };
      if (newCartItem.cart_set_quantity < 99) {
        newCartItem.cart_set_quantity = newCartItem.cart_set_quantity + 1;
      }
      await axios.put(
        "http://localhost:8000/cart/" + cartItem.cart_set_numb,
        newCartItem
      );
      window.location.reload();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleMinus = (cartItem) => async (e) => {
    try {
      const newCartItem = { ...cartItem };
      if (newCartItem.cart_set_quantity > 2) {
        newCartItem.cart_set_quantity = newCartItem.cart_set_quantity - 1;
      } else {
        handleDelete(newCartItem.cart_set_numb);
      }
      await axios.put("http://localhost:8000/cart/" + cartItem.cart_set_numb);
      window.location.reload();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  let totalPrice = 0;
  //add the sum of the total price.
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i]?.cart_set_price;
  }

  return (
    <div className="cart">
      <Container className="items">
        <h2>My Cart</h2>
        <div className="cart-container">
          <ul className="list-group">
            <li className="list-group-item">
              <Row className="list-group-row">
                <Col xs={3}>Image</Col>
                <Col xs={1}>
                  <div>Number</div>{" "}
                </Col>
                <Col xs={2}>
                  <div>Name</div>
                </Col>
                <Col xs={1}>
                  <div>Price</div>
                </Col>
                <Col xs={1}>
                  <div>Location</div>
                </Col>
                <Col xs={3}>
                  <div>Quantity</div>
                </Col>
                <Col xs={1}></Col>
              </Row>
            </li>

            {cartItems.map((cartItem) => {
              return (
                <li className="list-group-item" key={cartItem.cart_set_numb}>
                  <Row className="list-group-row">
                    <Col xs={3}>
                      <div className="image-container">
                        <img
                          src={require(`./../images/products/${cartItem.cart_set_img}`)}
                          alt={cartItem.cart_set_img}
                        />
                      </div>
                    </Col>
                    <Col xs={1}>
                      <div>#{cartItem.cart_set_numb}</div>
                    </Col>
                    <Col xs={2}>
                      <div>
                        <h5 className="mb-1">{cartItem.cart_set_name}</h5>
                      </div>
                    </Col>
                    <Col xs={1}>
                      <div>${cartItem.cart_set_price}</div>
                    </Col>
                    <Col xs={1}>
                      <div>{cartItem.cart_set_location}</div>
                    </Col>
                    <Col xs={3}>
                      <ButtonGroup>
                        <Button
                          onClick={handleMinus(cartItem)}
                          variant="secondary"
                        >
                          <MdRemove />
                        </Button>
                        <Button variant="secondary">
                          {cartItem.cart_set_quantity}
                        </Button>{" "}
                        <Button
                          onClick={handleAdd(cartItem)}
                          variant="secondary"
                        >
                          <MdAdd />
                        </Button>
                      </ButtonGroup>
                    </Col>
                    <Col xs={1}>
                      <div>
                        <button
                          className="btn btn-danger"
                          onClick={handleDelete(cartItem.cart_set_numb)}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </Col>
                  </Row>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      <Container className="summary">
        <h2>Summary</h2>

        <div className="summary-container">
          <ul>
            {cartItems.map((cartItem) => {
              return (
                <li className="list-group-item" key={cartItem.cart_set_numb}>
                  <Row className="list-group-row">
                    <Col xs={6}>
                      <div>
                        <h5 className="mb-1">{cartItem.cart_set_name}</h5>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div>
                        $
                        {formatNumberWithCommas(
                          roundMoneyNum(
                            cartItem.cart_set_price * cartItem.cart_set_quantity
                          )
                        )}
                      </div>
                    </Col>
                  </Row>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Viewcart;
