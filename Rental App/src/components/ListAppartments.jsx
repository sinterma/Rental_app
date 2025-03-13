import listAppartmentData from "../data/listings.json";
import React, { useState } from 'react';
import ItemCard from "./ItemCard";

const ListAppartments = () => {


const [appartmentList, setAppartmentList] = useState(listAppartmentData.results);
console.log(appartmentList)

const handleDelete = (myId) => {
    setAppartmentList(appartmentList.filter(list => list.id !== myId));

}


return (
    <div id ="list-container">


        {appartmentList.map(list => (
         

         <ItemCard key={list.id} list={list} onDelete={handleDelete} />
))}
    </div>
);
};
export default ListAppartments;
  