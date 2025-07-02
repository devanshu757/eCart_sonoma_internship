import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../Components/AuthContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Toastify from "toastify-js";

const Login = () => {
  const { login } = useAuth();
  const notify = () => toast("Wow so easy!");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      Toastify({
        text: "Passwords do not match. Please try again.",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      return;
    }
    if (formData.email === "dev@gmail.com" && formData.password === "12345") {
      login();

      <ToastContainer/>
      // Reset form data after successful login
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      Toastify({
        text: "Invalid credentials. Please try again.",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h3>Login</h3>
      </div>
      <form className="form">
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={handleInput}
            required
          />
        </label>
        {/* <p>Current email: {formData.email} </p> */}
        <label>
          Password:
          <input
            type="password"
            value={formData.password}
            name="password"
            onChange={handleInput}
            required
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleInput}
            required
          />
        </label>

        <div className="form-actions">
          <Link to="/cart">
            {" "}
            <button className="btn" type="submit" onClick={{handleSubmit,notify}}>
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
