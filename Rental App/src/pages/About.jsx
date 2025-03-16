import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; 
function About() {
  return (
   <div className="about-container">

    <h1 className="about-title">About Us</h1>
      <p className="about-subtitle">Smart Rental helps you find the perfect apartment.</p>
      <div className="about-content">
        <p>
        At SMART RENTAL, we are dedicated to providing exceptional short-term
        rental experiences that make every guest feel at home, no matter where
        they are. </p>
        <p> With a commitment to quality, comfort, and customer service,
        we specialize in offering fully equipped, beautifully maintained
        vacation homes and rentals . Whether you’re here for business, leisure,
        or a family getaway, we provide properties designed to meet your needs
        and exceed your expectations. </p>
        <p>
        Founded in 2023, our company was built on
        the idea that every guest deserves a stay that combines the comforts of
        home with the luxury of a vacation. From booking to check-out, we strive
        to ensure a seamless, hassle-free experience for everyone who stays with
        us.
      </p>
      </div>
      <Link to="/" className="home-button"> Go to Home Page</Link>
    </div>
  );
}

export default About;
