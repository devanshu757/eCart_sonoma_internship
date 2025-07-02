import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Toastify from 'toastify-js';


export default function AccessoriesProductList(props) {
  const { id, image, title, rating, price } = props;
  
  const [cartState, cartDispatch] = useCart();

  const addToCart = (item) => {
    cartDispatch({ type: "ADD_TO_CART", payload: item });
    
    Toastify({
      text: "Your Product has been added to Cart!",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    console.log(cartState.cartItems); 
  };
  

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="Accessories" />
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
                    <button className="btn" onClick={() => addToCart(props)}>
                      Add to Cart
                    </button>
                  )}
                  <Link to={`/accessoriesproducts/${id}`}>
                    <button className="btn">More Info</button>
                  </Link>
                </div>
      </div>
    </div>
  );
}





// import React from "react";
// import { Link } from "react-router-dom";

// export default function AccessoriesProductList({ id, image, title, rating, price }) {
//   return (
//     <div className="product-card">
//       <img className="product-image" src={image} alt="Accessories Product" />
//       <div className="product-details">
//         <h2>{title}</h2>
//         <p>{rating}</p>
//         <h3>{price}</h3>
//         <div className="product-buttons">
//           <button className="btn">Add to Cart</button>
//           <Link to={`/accessoriesproducts/${id}`}>
//             <button className="btn">More Info</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
