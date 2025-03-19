import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div className = "home-container">
      <h2 className = "welcome-tittle"> Welcome to Smart Rental – Find Your Perfect Home</h2>
      <p className = "tittle">Looking for a comfortable and affordable place to stay? Smart Rental offers a wide selection of apartments, houses, and vacation rentals tailored to your needs. Whether you're searching for a short-term stay or a long-term lease, we make the process easy and hassle-free.</p>
      <button><Link to="/list" className="apartmentList-button">Choose your apartment</Link> 
      </button>
     
    </div>
  );
}

export default Home;
