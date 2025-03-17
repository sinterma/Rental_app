import React, { useState } from "react";
import "./AddApartmentForm.css"; // Подключаем стили

const AddApartmentForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !pictureUrl) return;

    const newApartment = {
      id: Date.now(), // Генерируем уникальный ID
      name,
      price: `${price}`,
      picture_url: pictureUrl,
    };

    onAdd(newApartment); // Передаём данные в родительский компонент
    setName("");
    setPrice("");
    setPictureUrl("");
  };

  return (
    <form className="add-apartment-form" onSubmit={handleSubmit}>
      <h3>Add New Apartment</h3>
      <input
        type="text"
        placeholder="Apartment Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
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
      <button className = "submit-button" type="submit">Add Apartment</button>
    </form>
  );
};

export default AddApartmentForm;