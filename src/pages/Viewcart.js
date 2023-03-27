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

   const displayItems = cartItems.map((cartItems) =>
   
   <div key={cartItems.cart_set_numb}>
      <table>
        <tr>
          <td class="pic">
            <img
              src={require(`./../images/products/${cartItems.cart_set_img}`)}
              alt={cartItems.cart_set_img}
              width="70%"
            />
          </td>
          <td class="name">{cartItems.cart_set_name}</td>
          <td class="price">${cartItems.cart_set_price}</td>

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
      </table>

      <div className="Container-3"></div>
      <span className="Summary">Summary</span>

      <button className="Checkout">Checkout</button>
    </div>
 
   );

  return (
    <>
    <div class="Container">
        <div class="Title">Your Cart ({displayItems.length})</div>
      </div>
 	    <table>
        <th className="Product">Item</th><th></th>	<th className="Price">price</th><th class="Quantity">Quantity</th>
        <div class="Underline"></div>
        {displayItems}
      </table>
      </>
  );
}

export default Viewcart;