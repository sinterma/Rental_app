import React from 'react';
import ItemCard from "./ItemCard";

const ListAppartments = ({ appartmentList, setAppartmentList }) => {
  const handleDelete = (myId) => {
    setAppartmentList(appartmentList.filter(list => list.id !== myId));
  };

  return (
    <div id="list-container">
      {appartmentList.map(list => (
        <ItemCard key={list.id} list={list} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ListAppartments;
  