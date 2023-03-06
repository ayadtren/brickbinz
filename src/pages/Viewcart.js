import React, { useEffect, useState } from "react";
import './Viewcart.css';
import axios from "axios";
import logo from "../images/brickbinbanner.png";


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
   
   <table>
   <tr>
     <td class="pic"> <img src={logo}/></td>
     <td class="name">{cartItems.cart_set_name}</td>
     <td class="price">${cartItems.cart_set_price}</td>
     
     <td class="quantity">{cartItems.cart_set_quantity}</td>
    

   </tr>
 </table>

      
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
