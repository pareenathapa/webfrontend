import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesList } from "./Components/Routes";
import { CartProvider, UserContextProvider } from "./Components/Context";

function App() {
  return (
    <UserContextProvider>
      <CartProvider>
        <ToastContainer />
        <RoutesList />
      </CartProvider>
    </UserContextProvider>
  );
}

export default App;
