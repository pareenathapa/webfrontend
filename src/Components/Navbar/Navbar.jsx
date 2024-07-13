import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart from "../Assets/cart.png";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  // Check if the item is already in the cart
  const { cartProduct } = useCart();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar">
      <div
        className="nav-logo d-flex align-items-center justify-content-center"
        onClick={() => handleNavigation("/")}
      >
        <img src={logo} alt="GemChase Logo" />
        <p className="fw-bold">GemChase</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleNavigation("/")}>Home</li>
        <li onClick={() => handleNavigation("/jewelry")}>Our Jewelry</li>
        <li onClick={() => handleNavigation("/about")}>About Us</li>
      </ul>
      <div className="nav-login-cart">
        {isLoggedIn ? (
          <div className="nav-user">
            <button onClick={toggleDropdown}>Hi, Username</button>
            {showDropdown && (
              <div className="dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => handleNavigation("/login")}>Login</button>
        )}
        <div className="cart-box">
          <div className="product-number">{cartProduct?.length}</div>
          <img
            src={cart}
            alt="Cart"
            onClick={() => handleNavigation("/cart")}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
