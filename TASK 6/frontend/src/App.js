import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import CartPage from './pages/CartPage.jsx';
import { fetchCart } from './services/api.js';

function App() {
  const [cart, setCart] = useState(null);

  const refreshCart = () => {
    fetchCart().then(res => setCart(res.data));
  };

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <>
      <Navbar cartCount={cart?.items ? cart.items.reduce((a, b) => a + b.quantity, 0) : 0} />
      <Routes>
        <Route path="/" element={<HomePage refreshCart={refreshCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} refreshCart={refreshCart} />} />
      </Routes>
    </>
  );
}

export default App;
