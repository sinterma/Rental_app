import React from "react";
import  ListAppartments  from "../components/ListAppartments";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div>
      <ListAppartments />
      <h2>Welcome to Smart Rental</h2>
      <p>Find the best apartments for rent.</p>
    </div>

 
  );
} 

export default Home;