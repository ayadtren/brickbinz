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

   const displayItems = cartItems.map((cartItems) =>
      <tr>
        <td>{cartItems.cart_set_img} </td>
        <td>{cartItems.cart_set_name}</td>
        <td>{cartItems.cart_set_price}</td>
        <td>{cartItems.cart_set_quantity}</td>
        <td>total</td>
      </tr>
   );


  return (
    <>
 	    <table>
        <th>Item</th><th></th>	<th>price</th><th>Quantity</th><th>Total</th>
        {displayItems}
      </table>

      </>
  );
}

export default Viewcart;
