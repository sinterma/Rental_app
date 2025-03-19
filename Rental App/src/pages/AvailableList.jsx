import React, {useState}  from "react";
import { Link } from "react-router-dom";
import "./AvailableList.css";
import ListApartments from "../components/ListApartments";
import AddApartmentForm from "../components/AddApartmentForm"
import listApartmentData from "../data/listings.json";


export const AvailableList = () => {
  const [apartmentList, setApartmentList] = useState(listApartmentData.results);

  const handleAddApartment = (newApartment) => {
    console.log("Adding:", newApartment);
    setApartmentList([newApartment, ...apartmentList]); 
  };
  const handleEditApartment = (updatedApartment) => {
    ("Editing:", updatedApartment);
    setApartmentList(apartmentList.map(apartment =>
      apartment.id === updatedApartment.id ? updatedApartment : apartment
    ));
  };

  console.log("ListApartments received:", apartmentList);

  return (
    <div className="available-list">
      <AddApartmentForm onAdd={handleAddApartment} />
      <h2>Available Apartments</h2>
      <ListApartments apartmentList={apartmentList} setApartmentList={setApartmentList} onEdit={handleEditApartment}/>
      <Link to="/" className="home-button">Go to Home Page</Link>
    </div>
  );
};

export default AvailableList;