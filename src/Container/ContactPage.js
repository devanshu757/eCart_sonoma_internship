import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h1>Get in Touch</h1>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
      </div>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button className="btn" type="submit" onClick={(e) => {
          e.preventDefault();
          alert("Thank you for contacting us! We will get back to you soon.");
          // document.querySelector(".contact-form").reset();
        }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
