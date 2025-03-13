
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import  ItemDetails  from './pages/ItemDetails';


function App() {


  return (
    <div className="App">
    <Navbar />
    <Sidebar />

    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail/:id" element={<ItemDetails/>} />
      <Route path = "*" element={<NotFound />} />
    </Routes>

    <Footer />
    </div>
  )
}

export default App
