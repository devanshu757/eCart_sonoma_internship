import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Toastify from "toastify-js";
import { useAuth } from "./AuthContext";

export default function MobileProductList(props) {
  const { isLoggedIn } = useAuth();
  const { id, image, title, rating, price } = props;

  const [cartState, cartDispatch] = useCart();

  const addToCart = (item) => {
    cartDispatch({ type: "ADD_TO_CART", payload: item });
    localStorage.setItem(
      "cartItems",
      JSON.stringify([...cartState.cartItems, item])
    );

    Toastify({
      text: "Your Product has been added to Cart!",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    console.log(cartState.cartItems);
  };

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="Mobile Phone" />
      <div className="product-details">
        <h2>{title}</h2>
        <p>{rating}</p>
        <h3>₹ {price}</h3>
        <div className="product-buttons">
          {cartState.cartItems.some((item) => item.id === id) ? (
            <Link to="/cart">
              {isLoggedIn ? (
                <button className="btn">Go to Cart</button>
              ) : (
                <Link to="/login">
                  {" "}
                  <button className="btn">View Cart</button>
                </Link>
              )}
            </Link>
          ) : (
            <button className="btn" onClick={() => addToCart(props)}>
              Add to Cart
            </button>
          )}

          {/* <Link to={cartState.cartItems.some((item) => item.id === id) && isLoggedIn ? "/cart" : "/login"}>
            <button className="btn" onClick={() => cartState.cartItems.some((item) => item.id === id) ? null : addToCart(props)}>
              {cartState.cartItems.some((item) => item.id === id) && isLoggedIn ? 'View Cart' : 'Add to Cart'}
            </button>
          </Link> */}

          <Link to={`/mobileproducts/${id}`}>
            <button className="btn">More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
