import React, { useContext, createContext, useReducer } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const initialCartState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [], // Load from localStorage
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const existingItem = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };
        }
      }
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      case "INCREMENT_QUANTITY": {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        };
      }
      case "DECREMENT_QUANTITY": {
        return {
          ...state,
          cartItems: state.cartItems
            .map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: (item.quantity || 1) - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        };
      }
      case "SET_CART_ITEMS":
        return {
          ...state,
          cartItems: action.payload, // Set cart items from localStorage
        };
      default:
        return state;
    }
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  // Save cart data to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState.cartItems));
  }, [cartState.cartItems]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return [context.cartState, context.cartDispatch];
}
