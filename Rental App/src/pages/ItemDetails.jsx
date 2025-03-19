import React from "react";
import { useParams } from "react-router-dom";
import apartments from "../data/listings.json";

const ItemDetails = () => {
  const { id } = useParams();

  const foundApartment = apartments.results
    ? apartments.results.find((item) => item.id === Number(id))
    : apartments.find((item) => item.id === Number(id));

  if (!foundApartment) return <p>Not Found</p>;

  return (
    <div>
      <h2>{foundApartment.name}</h2>
      <img src={foundApartment.picture_url} alt={foundApartment.name} width="300" />
      <p>{foundApartment.description}</p>
      <p>Price: {foundApartment.price}</p>
      <p>Location: {foundApartment.neighbourhood}</p>
    </div>
  );
};

export default ItemDetails;
