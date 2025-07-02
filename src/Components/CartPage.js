import React, { useEffect } from "react";
import { useCart } from "./CartContext";
import "./CartPage.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartState, cartDispatch] = useCart();

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      cartDispatch({
        type: "SET_CART_ITEMS",
        payload: JSON.parse(savedCart),
      });
    }
  }, [cartDispatch]);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState.cartItems));
  }, [cartState.cartItems]);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2 style={{ height: "100px" }}>Your Cart</h2>
      </div>
      <div className="cart-items">
        {cartState.cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>₹ {item.price * item.quantity}</p>

            <div className="buttons">
              <button
                className="btn"
                onClick={() =>
                  cartDispatch({
                    type: "DECREMENT_QUANTITY",
                    payload: { id: item.id },
                  })
                }
              >
                -
              </button>
              <span style={{ margin: "0 10px" }}> {item.quantity || 1} </span>
              <button
                className="btn"
                onClick={() =>
                  cartDispatch({
                    type: "INCREMENT_QUANTITY",
                    payload: { id: item.id },
                  })
                }
              >
                +
              </button>
            </div>
           
            <div className="remove-button">
            
              <button
                className="btn"
                onClick={() =>
                  cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: { id: item.id },
                  })
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="checkout-bar">
          <div className="total-price">
            <h3>
              Total: ₹{" "}
              {cartState.cartItems.reduce(
                (total, item) => total + item.price * (item.quantity || 1),
                0
              )}
            </h3>
          </div>
          <Link to="/checkout">
            <button className="btn">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
