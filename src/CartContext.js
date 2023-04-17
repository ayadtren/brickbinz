import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const storedQuantity = localStorage.getItem("cartQuantity");
    if (storedQuantity) {
      setCartQuantity(parseInt(storedQuantity, 10));
    } else {
      fetchCartQuantity();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartQuantity", cartQuantity);
  }, [cartQuantity]);

  const fetchCartQuantity = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cart/quantity");
      setCartQuantity(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = () => {
    const newcartQuantity = cartQuantity + 1;
    setCartQuantity(newcartQuantity);
    localStorage.setItem("cartQuantity", newcartQuantity);
  };

  const value = {
    cartQuantity,
    addToCart,
    fetchCartQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
