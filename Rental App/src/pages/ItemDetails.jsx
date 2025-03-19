import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 
import "./ItemDetails.css"


const ItemDetails = ({apartments}) => {
  const { id } = useParams();


  console.log("apartments:",apartments)

  console.log("param id:",id)

  const foundApartment = apartments?.find((item) => item.id === Number(id) || item.id === id);

  if (!foundApartment) return <p>Not Found</p>;

  return (
    <div className="apartment-details-container">
      <h2 className="apartment-title">{foundApartment.name}</h2>
      <img className="apartment-image" src={foundApartment.picture_url} alt={foundApartment.name} width="300" />
      <p className="apartment-info">{foundApartment.description}</p>
      <p className="apartment-price">Price: {foundApartment.price}</p>
      <p className="apartment-info">Location: {foundApartment.neighbourhood}</p>
      <div className="button-container">
        <button className="action-button">
          <Link to="/list" className="details-link">Choose your apartment</Link>
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;