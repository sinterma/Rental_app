import { Link } from "react-router-dom";
import "./AvailableList.css";
import ListApartments from "../components/ListApartments";
import AddApartmentForm from "../components/AddApartmentForm";

export const AvailableList = ({ apartments, setApartments }) => {
  const handleAddApartment = (newApartment) => {
    console.log("Adding:", newApartment);
    setApartments([newApartment, ...apartments]);
  };

  const handleEditApartment = (updatedApartment) => {
    "Editing:", updatedApartment;
    setApartments(
      apartments.map((apartment) =>
        apartment.id === updatedApartment.id ? updatedApartment : apartment
      )
    );
  };

  console.log("ListApartments received:", apartments);

  return (
    <div className="available-list">
      <AddApartmentForm onAdd={handleAddApartment} />
      <h2>Available Apartments</h2>
      <ListApartments
        apartmentList={apartments}
        setApartmentList={setApartments}
        onEdit={handleEditApartment}
      />
      <Link to="/" className="home-button">
        Go to Home Page
      </Link>
    </div>
  );
};

export default AvailableList;
