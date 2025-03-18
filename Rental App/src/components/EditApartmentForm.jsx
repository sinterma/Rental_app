import React, { useState } from "react";
import "./ItemCard.css";

const EditApartmentForm = ({ apartment, onSave, onCancel }) => {
    const [name, setName] = useState(apartment.name);
    const [price, setPrice] = useState(apartment.price.replace("€", ""));
    const [pictureUrl, setPictureUrl] = useState(apartment.picture_url);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price || !pictureUrl) return;
    
        const updatedApartment = {
          ...apartment,
          name,
          price: `${price} `, 
          picture_url: pictureUrl,
        };
    
        onSave(updatedApartment);
      };
    
      return (
        <form className="edit-apartment-form" onSubmit={handleSubmit}>
          <h3>Edit Apartment</h3>
          <input
            type="text"
            placeholder="Apartment Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price (€)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            required
          /> 
           <div className="button-container"><button className="submit-button" type="submit">Save</button>
          <button className="cancel-button bigger" type="button" onClick={onCancel}>Cancel</button></div>
          
        </form>
      );
    };
    
    export default EditApartmentForm;