import React from "react";
import ItemCard from "./ItemCard";

const ListApartments = ({ apartmentList, setApartmentList, onEdit }) => {
  const handleDelete = (myId) => {
    setApartmentList(apartmentList.filter((list) => list.id !== myId));
  };

  return (
    <div id="list-container">
      {apartmentList.map((list) => (
        <ItemCard
          key={list.id}
          list={list}
          onDelete={handleDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ListApartments;
