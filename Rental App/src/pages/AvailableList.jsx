import React from 'react';  // React должен быть первым импортом
import { Link } from "react-router-dom";
import "./AvailableList.css";
import ListAppartments from "../components/ListAppartments";

export const AvailableList = () => {
  return (
    <div> 
        <Link to="/" className="home-button"> Go to Home Page</Link> 
        <ListAppartments /></div>
  )
}

export default AvailableList;
