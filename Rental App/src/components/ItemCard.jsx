import React from 'react';

const ItemCard = ({ list, onDelete }) => {
    const price = list?.price ? parseFloat(list.price.replace("$", "")) : 0;
    const priceBadge = price < 100 ? "🔥" : "👍"; 

  return (
    <article className="list">
      <img src={list.picture_url} alt={list.name} width="200" />
      <p><span className="price">Price:</span> {list.price} € {priceBadge}</p>
      <button onClick={() => onDelete(list.id)}>❌ Delete</button>
    </article>
  );
};

export default ItemCard;