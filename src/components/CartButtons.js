import React from "react";
import { Link } from "react-router-dom";
import CartButtonsContainer from "../styled-components/CartButtonsStyle";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useProductContext } from "../context/products_context";

const CartButtons = () => {
  const { closeSidebar } = useProductContext();
  return (
    <CartButtonsContainer className="cart-btn-wrapper">
      <Link
        to="/cart"
        className="cart-btn"
        onClick={() => {
          closeSidebar();
        }}
      >
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">12</span>
        </span>
      </Link>
      <button
        type="button"
        className="auth-btn"
        onClick={() => {
          closeSidebar();
        }}
      >
        Login <FaUserPlus />
      </button>
    </CartButtonsContainer>
  );
};

export default CartButtons;
