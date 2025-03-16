import React from "react";
import "./ItemCard.css"; 


const ItemCard = ({ list, onDelete }) => {
  const price = list?.price ? parseFloat(list.price.replace("$", "")) : 0;
  const priceBadge = price < 100 ? "🔥" : "👍";

  return (
   
   
    <article className="item-card">
      <img src={list.picture_url} alt={list.name} className="item-image" />
      <div className="item-content">
        <h3 className="item-title">{list.name}</h3>
        <p className="item-price">
          <span>Price:</span> {list.price} € {priceBadge}
          <button className="delete-button" onClick={() => onDelete(list.id)}>❌ Delete</button>
        </p>
       
      </div>
    </article>
    
  );
};

export default ItemCard;
