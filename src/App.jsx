import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/product-details/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={
          <CartPage 
            cartItems={cartItems} 
            removeFromCart={removeFromCart} 
          />} 
        />
        <Route path="/checkout" element={
          <CheckoutPage 
            cartItems={cartItems} 
            clearCart={clearCart} 
          />} 
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
