import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Jewelry from './pages/homepage/Jewelery'; 
import About from './pages/homepage/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/homepage/AddToCart';
import ProductDetail from './pages/homepage/ProductDetail';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUpdateProduct from './pages/admin/AdminUpdateProduct';

function App() {
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
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jewelry' element={<Jewelry onAdd={onAdd} />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='product/:id' element={< ProductDetail />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/jewelery/update/:id' element={<AdminUpdateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
