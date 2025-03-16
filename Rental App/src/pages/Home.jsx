import React from "react";
import ListAppartments from "../components/ListAppartments";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div>
      <h2 className = "welcome-tittle"> Welcome to Smart Rental</h2>
      <p className = "tittle">Find the best apartments for rent.</p>
      <ListAppartments />
    </div>
  );
}

export default Home;
