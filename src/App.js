import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import {
  About,
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Products,
  Error,
  PrivateRoute,
} from "./pages";
import CheckoutPage from "./pages/CheckoutPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
