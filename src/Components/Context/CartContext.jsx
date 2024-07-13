import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// Create Context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProduct(savedCart);
  }, []);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const isProductInCart = cartProduct.some(
      (cartItem) => cartItem._id === item._id
    );

    if (isProductInCart) {
      // Show toast message if the product is already in the cart
      toast.error("Product already in cart");
    } else {
      // Add the product to the cart if it's not already there
      const updatedCart = [...cartProduct, item];
      setCartProduct(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Product added successfully");
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartProduct.filter((cartItem) => cartItem._id !== id);
    setCartProduct(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.error("Product removed successfully");
  };

  return (
    <CartContext.Provider value={{ cartProduct, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
