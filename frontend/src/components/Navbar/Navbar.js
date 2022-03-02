import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getbadgeCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        <h2>Shopping Cart</h2>
      </Link>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="cartlogo__badge">{getbadgeCount()}</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
