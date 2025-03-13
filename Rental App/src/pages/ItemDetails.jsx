import React from 'react'
import { useParams } from "react-router-dom";

const ItemDetails = () => {
    const { id }  = useParams ();
  return (
    <div>
    <h2>Apartment Details</h2>
    <p> Apartment ID {id} </p>
    </div>
  )
}
export default ItemDetails;
