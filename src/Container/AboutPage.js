import React from "react";
import teamImage from "../assets/team.jpeg";
import missionImage from "../assets/mission.jpeg";
import contactImage from "../assets/contact.jpeg";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h1>About Our E-Commerce Store</h1>

      <section className="about-section">
        <img src={missionImage} alt="Our Mission" className="about-image" />
        <div>
          <h2>Our Mission</h2>
          <p>
            At OurStore, we aim to provide the best online shopping experience.
            We offer a wide selection of electronics, accessories, and more —
            all at competitive prices with excellent customer service.
          </p>
        </div>
      </section>

      <section className="about-section reverse">
        <img src={teamImage} alt="Our Team" className="about-image" />
        <div>
          <h2>Meet the Team</h2>
          <p>
            We are a passionate team of tech enthusiasts and professionals who
            work tirelessly to curate and deliver the best products to you.
          </p>
          <p>
            Our developers, designers, and support staff are committed to making
            your shopping seamless and enjoyable.
          </p>
        </div>
      </section>

      <section className="about-section">
        <img src={contactImage} alt="Contact Us" className="about-image" />
        <div>
          <h2>Contact Us</h2>
          <p>
            Got questions or feedback? We’re here to help! Reach out at:
            <br />
            <a href="mailto:abc@gmail.com">abc@gmail.com</a>
          </p>
          <p>Follow us on social media for the latest updates and deals!</p>
        </div>
      </section>

      <footer className="about-footer">
        <p>Thank you for visiting our store. Happy shopping!</p>
      </footer>
    </div>
  );
};

export default AboutPage;
