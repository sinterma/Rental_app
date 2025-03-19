import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import AvailableList from "./pages/AvailableList";
import { useState } from "react";
import ItemDetails from "./pages/ItemDetails"; 
import apartmentList from "../src/data/listings.json"

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [apartments, setApartments] = useState(apartmentList.results || [])

console.log("apartments from center data:",apartments)

  return (
    <div className="App">
      <Navbar />
      <button className ="show-button"
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      >
        Show Sidebar
      </button>
      {showSidebar ? <Sidebar /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<AvailableList apartments={apartments} setApartments={setApartments}/>} />
        <Route path="/apartment/:id" element={<ItemDetails apartments={apartments} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
