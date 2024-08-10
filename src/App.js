import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./Components/Context/CartContext";
import { Footer } from "./Components/Footer";
import { RoutesList } from "./Components/Routes";

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <RoutesList />
    </CartProvider>
  );
}

export default App;
