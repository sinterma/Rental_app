import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css"; 

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">We’re always happy to help you find the perfect rental.</p>
      
      <div className="contact-content">
        <p>📞 <strong>Phone:</strong> +1 (123) 456-7890</p>
        <p>📧 <strong>Email:</strong> info@yourrentalcompany.com</p>
        <p>🏢 <strong>Our Office:</strong> 12 Berliner Strasse, Berlin, Germany</p>
        <p>🕒 <strong>Business Hours:</strong></p>
        <ul>
          <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
          <li>Saturday: 10:00 AM – 3:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
        <p>📍 Visit our office or leave a request – we’ll help you find the ideal apartment for rent!</p>
      </div>
      
      <Link to="/" className="home-button"> Go to Home Page</Link>
    </div>
  );
}

export default Contact;
