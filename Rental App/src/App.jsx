
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';

function App() {


  return (
    <>
    <Navbar />
    <Sidebar />
    <Home /> 
    <About />
    <Footer />
    </>
  )
}

export default App
