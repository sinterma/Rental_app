import React, {useState}  from "react";
import { Link } from "react-router-dom";
import "./AvailableList.css";
import ListAppartments from "../components/ListAppartments";
import AddApartmentForm from "../components/AddApartmentForm"
import listAppartmentData from "../data/listings.json";

export const AvailableList = () => {
  const [appartmentList, setAppartmentList] = useState(listAppartmentData.results);

  const handleAddApartment = (newApartment) => {
    setAppartmentList([newApartment, ...appartmentList]); 
  };

  return (
    <div className="available-list">
      <AddApartmentForm onAdd={handleAddApartment} />
      <h2>Available Apartments</h2>
      <ListAppartments appartmentList={appartmentList} setAppartmentList={setAppartmentList} />
      <Link to="/" className="home-button">Go to Home Page</Link>
    </div>
  );
};

export default AvailableList;
