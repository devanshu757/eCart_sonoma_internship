import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false // Load from localStorage
  );

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", JSON.stringify(true)); // Save to localStorage
  };

  const logout = () => {
    if (!window.confirm("Are you sure you want to logout?")) {
      return; // Exit if user cancels
    }
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Remove from localStorage
  };

  useEffect(() => {
    const savedAuthState = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (savedAuthState) {
      setIsLoggedIn(savedAuthState);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};





// import React, { useContext, createContext, useState } from "react";
// // import { useCart } from "./CartContext";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {

//   // const [cartState, cartDispatch] = useCart();
//   // console.log("AuthProvider cartState", cartDispatch);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [authState, setAuthState] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     cartItems: [],
//   });

//   const login = () => {
//     setIsLoggedIn(true);
//     setAuthState({
//       ...authState,
//       email: "",
//       password: "",
//       confirmPassword: "",
//       cartItems: [],
//     });
//   };
//   const logout = () => {
//     setIsLoggedIn(false);
//     setAuthState({
//       email: "",
//       password: "",
//       confirmPassword: "",
//      cartItems: [],
//     });
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout, authState }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
