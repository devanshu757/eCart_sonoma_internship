import React, { useEffect } from "react";
import { useCart } from "./CartContext";
import "./CartPage.css";
import axios from "axios";
import Toastify from "toastify-js";
// import logo from "./logo.svg";

const CartPage = () => {
  const [cartState, cartDispatch] = useCart();

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      cartDispatch({
        type: "SET_CART_ITEMS",
        payload: JSON.parse(savedCart),
      });
    }
  }, [cartDispatch]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState.cartItems));
  }, [cartState.cartItems]);

  useEffect(() => {
    if (cartState.cartItems.length === 0) {
     Toastify({
                     text: "Your cart is empty. Please add items to the cart.",
                     className: "info",
                     style: {
                       background: "linear-gradient(to right, #2C3D56, #D4A59A)",
                     },
                   }).showToast();
    }
  }, [cartState.cartItems.length]);

  const tax = 18,
    shipping = 50;

  const totalAmount = cartState.cartItems.reduce(
    (total, item) => tax + shipping + total + item.price * (item.quantity || 1),
    0
  );

  // Function to handle Razorpay payment

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
     Toastify({
                     text: "Razorpay SDK failed to load. Are you online?",
                     className: "info",
                     style: {
                       background: "linear-gradient(to right, #2C3D56, #D4A59A)",
                     },
                   }).showToast();
      return;
    }

    const result = await axios.post("http://localhost:5000/payment/orders", {
      amount: totalAmount * 100, //  Razorpay accepts paise (not rupees)
    });

    if (!result) {
     Toastify({
                     text: "Server error. Are you online?",
                     className: "info",
                     style: {
                       background: "linear-gradient(to right, #2C3D56, #D4A59A)",
                     },
                   }).showToast();
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_mDUebrkYc2EP4q", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "ECart Corp.",
      description: `Payment for ₹${totalAmount}`,
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          amount: totalAmount,
        };

        localStorage.setItem("paymentInfo", JSON.stringify(data));

        // Clear cart after successful payment
        cartDispatch({ type: "CLEAR_CART" });
        localStorage.removeItem("cartItems");

        Toastify({
                        text: "Payment successful! Check localStorage for details.",
                        className: "info",
                        style: {
                          background: "linear-gradient(to right, #2C3D56, #D4A59A)",
                        },
                      }).showToast();
      },

      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const MAX_CART_ITEMS = 50;

  const handleIncrementQuantity = (id) => {
    const totalQuantity = cartState.cartItems.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );

    if (totalQuantity >= MAX_CART_ITEMS) {
      Toastify({
                      text: "You cannot add more than 50 items in cart.",
                      className: "info",
                      style: {
                        background: "linear-gradient(to right, #2C3D56, #D4A59A)",
                      },
                    }).showToast();
      return;
    }

    cartDispatch({
      type: "INCREMENT_QUANTITY",
      payload: { id },
    });
  };

  return (
    <div className="cart-container">
      {/* Cart Items Section */}
  
      <div className="cart-items-section">
        <h2>Your Cart</h2>
        <div className="cart-table-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Action</span>
        </div>

        {cartState.cartItems.map((item) => (
          <div key={item.id} className="cart-item-row">
            <div className="cart-product-info">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
            <p>₹ {item.price * item.quantity}</p>
            <div className="quantity-control">
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
              <span>{item.quantity || 1}</span>
              <button
                className="btn"
                onClick={() => handleIncrementQuantity(item.id)}
              >
                +
              </button>
            </div>
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
        ))}
      </div>
      {/*Checkout Section*/}
      <div className="cart-checkout-section">
        <h3>Checkout Summary</h3>
        <div className="checkout-details">
          <div>
            <span>Subtotal</span>
            <span>₹ {totalAmount}</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>₹ {shipping}</span>
          </div>
          <div>
            <span>Tax</span>
            <span>₹ {tax}</span>
          </div>
          <div className="checkout-total">
            <span>Total</span>
            <span>₹ {totalAmount}</span>
          </div>
        </div>

        <button className="btn" onClick={displayRazorpay}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
























// const paymentInfo = JSON.parse(localStorage.getItem("paymentInfo"));

// import React, { useEffect } from "react";
// import { useCart } from "./CartContext";
// import "./CartPage.css";
// import { Link } from "react-router-dom";

// const CartPage = () => {
//   const [cartState, cartDispatch] = useCart();

//   // Load cart data from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cartItems");
//     if (savedCart) {
//       cartDispatch({
//         type: "SET_CART_ITEMS",
//         payload: JSON.parse(savedCart),
//       });
//     }
//   }, [cartDispatch]);

//   // Save cart data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartState.cartItems));
//   }, [cartState.cartItems]);

//   return (
//     <div className="cart-page">
//       <div className="cart-header">
//         <h2 style={{ height: "100px" }}>Your Cart</h2>
//       </div>
//       <div className="cart-items">
//         {cartState.cartItems.map((item) => (
//           <div key={item.id}>
//             <img src={item.image} alt={item.title} />
//             <h4>{item.title}</h4>
//             <p>₹ {item.price * item.quantity}</p>

//             <div className="buttons">
//               <button
//                 className="btn"
//                 onClick={() =>
//                   cartDispatch({
//                     type: "DECREMENT_QUANTITY",
//                     payload: { id: item.id },
//                   })
//                 }
//               >
//                 -
//               </button>
//               <span style={{ margin: "0 10px" }}> {item.quantity || 1} </span>
//               <button
//                 className="btn"
//                 onClick={() =>
//                   cartDispatch({
//                     type: "INCREMENT_QUANTITY",
//                     payload: { id: item.id },
//                   })
//                 }
//               >
//                 +
//               </button>
//             </div>

//             <div className="remove-button">

//               <button
//                 className="btn"
//                 onClick={() =>
//                   cartDispatch({
//                     type: "REMOVE_FROM_CART",
//                     payload: { id: item.id },
//                   })
//                 }
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//         <div className="checkout-bar">
//           <div className="total-price">
//             <h3>
//               Total: ₹{" "}
//               {cartState.cartItems.reduce(
//                 (total, item) => total + item.price * (item.quantity || 1),
//                 0
//               )}
//             </h3>
//           </div>
//           <Link to="/checkout">
//             <button className="btn">Checkout</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
