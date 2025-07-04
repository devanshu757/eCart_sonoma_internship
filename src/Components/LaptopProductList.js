import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Toastify from "toastify-js";

export default function LaptopProductList(props) {
  const { id, image, title, rating, price } = props;

  const [cartState, cartDispatch] = useCart();

  const MAX_CART_ITEMS = 50;

  const handleAddToCart = (product) => {
    const totalQuantity = cartState.cartItems.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );

    if (totalQuantity >= MAX_CART_ITEMS) {
      Toastify({
        text: "You cannot add more than 50 items in cart.",
        className: "info",
        style: {
          background: "linear-gradient(to right,  #2C3D56, #E8DCC5)",
        },
      }).showToast();
      return;
    }

    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify([...cartState.cartItems, product])
    );

    Toastify({
      text: "Your Product has been added to Cart!",
      className: "info",
      style: {
        background: "linear-gradient(to right,  #2C3D56, #E8DCC5)",
      },
    }).showToast();
    console.log(cartState.cartItems);
  };

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="Laptop" />
      <div className="product-details">
        <h2>{title}</h2>
        <p>{rating}</p>
        <h3>₹ {price}</h3>
        <div className="product-buttons">
          {cartState.cartItems.some((item) => item.id === id) ? (
            <Link to="/cart">
              <button className="btn">View Cart</button>
            </Link>
          ) : (
            <button className="btn" onClick={() => handleAddToCart(props)}>
              Add to Cart
            </button>
          )}
          <Link to={`/laptopproducts/${id}`}>
            <button className="btn">More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
