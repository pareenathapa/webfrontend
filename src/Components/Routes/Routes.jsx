import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { CartProductList } from "../CartProductList/CartProductList";
import React, { useState } from "react";
import Home from "../../pages/homepage/Home";
import Jewelry from "../../pages/homepage/Jewelery";
import About from "../../pages/homepage/About";
import ProductDetail from "../../pages/homepage/ProductDetail";
import Register from "../../pages/register/Register";
import Login from "../../pages/login/Login";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminUpdateProduct from "../../pages/admin/AdminUpdateProduct";
import { UserProfile } from "../../pages/profile";

export const RoutesList = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewelry" element={<Jewelry onAdd={onAdd} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartProductList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route
          path="/admin/jewelery/update/:id"
          element={<AdminUpdateProduct />}
        />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};
