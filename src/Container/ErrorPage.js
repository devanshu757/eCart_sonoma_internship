import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import { useAuth }  from "../Components/AuthContext";

function ErrorPage() {
  const { isLoggedIn } = useAuth();
  return (
   (isLoggedIn) ? (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <h4>Sorry, the page you are looking for does not exist.</h4>
      <button className="btn"><Link to="/">Go to Home</Link></button>
    </div>
   ) : (
    <div className="error-page">
      <h1>Login to access your cart items</h1>
      <h4>The page does not exist as you are currently not logged in. Please login to continue by clicking below</h4>
      <button className="btn"><Link to="/login">Login</Link></button>
    </div>
   )
  );
}

export default ErrorPage;