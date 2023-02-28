import React, { useEffect, useState } from "react";
import './Viewcart.css';
import axios from "axios";

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

  return (
    <>
    <div className="Container">
        <span className="Title">Your Cart (3)</span>
    </div>

    <div className="Container2">
      <span className="Product">Product</span>
      <span className="Price">Price</span>
      <span className="Quantity">Quantity</span>
      <div className="Underline">
    </div>

       {/* placeholders for images*/}
    <div className="Product-1"></div>
      <div className="Product-2"></div>
      <div className="Product-3"></div>
    </div>
  
    <div>
      <span className="Product-description-1">Product description 1</span>
      <span className="Product-description-2">Product description 2</span>
      <span className="Product-description-3">Product description 3</span>
    </div>

    <div>
      <span className="Price-1">$49.99</span>
      <span className="Price-2">$79.99</span>
      <span className="Price-3">$149.99</span>
    </div>

    <div>
      <span className="Quantity-1">x1</span>
      <span className="Quantity-2">x1</span>
      <span className="Quantity-3">x1</span>
    </div>
  
    <div>
    <div className="Container-3"></div>
      <span className="Summary">Summary</span>
      <button className="Checkout">Checkout</button>
    </div>

      </>
      
      
  );
}

export default Viewcart;
