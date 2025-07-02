import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext";
import "./Header.css";

const Header = () => {
  const { isLoggedIn, logout } = useAuth();

  const [cartState, cartDispatch] = useCart()
  console.log("Header cartState", cartDispatch);


  const totalItems = cartState.cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
  return (
    <header className="header">
      <div className="logo">
        <span className="e">e</span>
        <span className="cart">Cart</span>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <button className="btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <FaUser /> Login
          </Link>
        )}
        <div className="cart-icon">
          <Link to="/cart">
            <FaCartShopping /> Cart{" "}
          </Link>

          <span class="badge badge-pill badge-primary">
            {" "}
            {totalItems}{" "}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// use badge concept instead of span
