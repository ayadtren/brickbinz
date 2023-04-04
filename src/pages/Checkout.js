import React, { useEffect, useState } from 'react'
import '../styles/CheckoutStyles.scss'
import axios from 'axios';
const Checkout = () => {
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
        <div>
            {/* we need 5 div containers. 2 for the titles, 
      2 for the contents such as cart summary and payment form.
      and the other one for the button. */}

            {/*maybe relative positioning can be used...*/}
            <div className='payment-container'>
                <div className='payment-title'>
                    <h2>Payment Options</h2>
                    <div className='payment form'>

                    </div>
                </div>
            </div>
            <div className='summary-container'>
                <div className='summary-title'>
                    <h2>Cart Summary</h2>
                    <p>edit link</p>
                    <div className='summary-list'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
