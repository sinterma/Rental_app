import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="App Logo" className="logo" />
      <h1 className="app-name">Smart Rental</h1>
    </nav>
  );
}

export default Navbar;
