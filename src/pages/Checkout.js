import React, { useEffect, useState } from 'react'
import '../styles/CheckoutStyles.scss'
import axios from 'axios';
const Checkout = () => {

    //get data from cart.
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

    //displays product name and price.
    const listItems = cartItems.map((cartItems) => (
        <div className='display-cart'>

            <li key={cartItems.cart_set_numb}>
                <h5>{cartItems.cart_set_name}</h5>
                <p>${cartItems.cart_set_price}</p>
            </li>
            {/* hr is just line break. */}
            <hr></hr>
        </div>
    ));

    let totalPrice = 0;
    //add the sum of the total price. 
    for(let i = 0; i < cartItems.length; i++){
        totalPrice += cartItems[i]?.cart_set_price;
    }
    return (
        <div>


            {/*maybe relative positioning can be used...*/}
            <div className='payment-container'>
                <div className='payment-title'>
                    <h2>Payment Options</h2>
                </div>
                <div className='payment-form'>
                    Brand: <input type="text" placeholder="Visa" name="setName" required /><br/>
                    Card Number: <input type="text" placeholder="Card Number" name="setPrice" required /><br/>
                    Expiry Date: <input type="text" placeholder="MM / YY" name="setLocation" required /><br/>
                    Card Holder: <input type="text" placeholder="Card Holder name" name="setQuantity" required /><br/>
                    CVV: <input type='number' placeholder="CVV" name="setImage" required /><br/>
                    Billing Postal Code: <input type="text" placeholder="A0A 0A0" name="postalCode" required /><br/>
                </div>

            </div>
            <div className='checkout-summary-container'>
                <div className='summary-title'>
                    <h2>Cart Summary</h2><p>edit link</p>
                </div>
                <div className='summary-list'>

                    <ul> {listItems}</ul>

                </div>
                <div className='summary-total-price'>
                    Subtotal: ${totalPrice}
                </div>

            </div>
           
            <div className="button">
                <button className="checkout-button" >
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default Checkout;
