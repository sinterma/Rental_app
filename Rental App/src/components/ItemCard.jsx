import React,{useState} from "react";
import "./ItemCard.css"; 
import EditApartmentForm from "./EditApartmentForm";



const ItemCard = ({ list, onDelete,onEdit  }) => {
  const [isEditing, setIsEditing] = useState(false);
  if (!list?.price || !list.price.includes("$")) {
    return null }
  const price = list?.price ? parseFloat(list.price.replace("$", "")) : 0;
  const priceBadge = price < 100 ? "🔥" : "👍";

  return (
    <article className="item-card">
      {isEditing ? (
        <EditApartmentForm
          apartment={list}
          onSave={(updatedApartment) => {
            onEdit(updatedApartment);
            setIsEditing(false); // Закрываем форму после редактирования
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
      <img src={list.picture_url} alt={list.name} className="item-image" />
      <div className="item-content">
        <h3 className="item-title">{list.name}</h3>
        <p className="item-price">
          <span>Price:</span> {list.price}  {priceBadge}
          <div className="button-container">
          <button className="edit-button" onClick={() => setIsEditing(true)}>✏️ Edit</button>
          <button className="delete-button" onClick={() => onDelete(list.id)}>❌ Delete</button>
          </div>
        </p>
       
      </div>
      </>
      )}
    </article>
    
  );
};

export default ItemCard;
