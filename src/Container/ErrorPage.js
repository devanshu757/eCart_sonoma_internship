import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = ({ message, show, onClose }) => {
  if (!show) return null;

  return (
    <div className="error-modal-overlay">
      <div className="error-modal">
        <h2>Page Not Found</h2>
        <p>{message || "Sorry, the page you are looking for does not exist."}</p>
        <div className="modal-buttons">
          <Link to="/" className="btn">Go to Home</Link>
          <Link to="/login" className="btn">Login</Link>
        </div>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ErrorPage;
