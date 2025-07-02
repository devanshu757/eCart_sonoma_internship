import React from "react";
import phone from "../assets/phone.jpeg";
import laptop from "../assets/laptop.jpeg";
import accessories from "../assets/accessories.jpeg";
import { Link } from "react-router-dom";
import "./HomePage.css"; 
import "../App.css"; 


const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage">
        <div className="heading">
          <h2>Welcome to Our Store!</h2>
          <p>Discover amazing products at unbeatable prices.</p>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <h3>Smart Phones</h3>
            </div>
            <div className="card-image">
              <img src={phone} alt="Smart Phones" />
            </div>
            <div className="card-content">
              <p>
                Explore the latest smartphones with cutting-edge technology and
                features. From high-performance cameras to long-lasting
                batteries, we have the perfect phone for you at the best prices
                available.
              </p>
              <br />
              <button className="btn">
                <Link to="/mobileProducts"> Shop Now </Link>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Laptops</h3>
            </div>
            <div className="card-image">
              <img src={laptop} alt="Laptops" />
            </div>
            <div className="card-content">
              <p>
                Find the perfect laptop for work, gaming, or everyday use. Find
                each category of laptops with the latest features and
                performance. Get the best deals on laptops that suit your needs
                and budget.
              </p>
              <br />
              <button className="btn">
                <Link to="/laptopProducts"> Shop Now </Link>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Accessories</h3>
            </div>
            <div className="card-image">
              <img src={accessories} alt="Accessories" />
            </div>
            <div className="card-content">
              <p>
                Enhance your devices with our range of accessories, from cases
                to chargers. Find the best accessories to complement your
                devices. With our wide selection, you can find everything you
                need.
              </p>
              <br />
              <button className="btn">
                <Link to="/accessoriesproducts"> Shop Now </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
