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

  const handleDelete = async (cart_set_numb) => {
    try {
      console.log("http://localhost:8000/cart/" + cart_set_numb)
      await axios.delete("http://localhost:8000/cart/" + cart_set_numb);
      window.location.reload();
    } catch (err) {
      console.log(err.response.data)
    }
  }
 
    let totalPrice = 0;
    //add the sum of the total price. 
    for(let i = 0; i < cartItems.length; i++){
        totalPrice += cartItems[i]?.cart_set_price;
    }

   const displayItems = cartItems.map((cartItems) =>
   <div key={cartItems.cart_set_numb}>
      
        <tr>
          <td class="pic">
            <img
              src={require(`./../images/products/${cartItems.cart_set_img}`)}
              alt={cartItems.cart_set_img}
              width="70%"
            />
          </td>
          <td class="name">{cartItems.cart_set_name}</td>
          <td class="cart-Price">${cartItems.cart_set_price}</td>
          <td class="quantity">
            {cartItems.cart_set_quantity}
            <button
              className="remove-button"
              onClick={() => handleDelete(cartItems.cart_set_numb)}
            >
              X
            </button>
          </td>
        </tr>
   

     
      {/* <span className="Summary">Summary</span> */}
    
    </div>
 
   );

  return (
    <>
    <div class="title-container">
        <div class="Title">Your Cart ({displayItems.length})</div>
      </div>
      
 	    <table className="item-table">
        <tr>
        <th className="cart-items">Items</th><th></th><th className="price-header">price</th><th class="Quantity">Quantity</th>
        </tr>
        {/* <div class="Underline"></div> */}
        {displayItems}
      </table>

      <div className="summary-container">
        <h2>SUMMARY</h2>
        <h4>total price: ${totalPrice}</h4>
      </div>

      <button className="checkout-button">Checkout</button>
      </>
  );
}

export default Viewcart;