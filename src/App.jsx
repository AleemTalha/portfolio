import React, { useEffect } from "react";  // Make sure to import useEffect
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Componenets/SubComponents/navbar/navbar";
import Home from "./Componenets/Pages/Home";
import About from "./Componenets/Pages/About";
import Contact from "./Componenets/Pages/contact";
import Skills from "./Componenets/Pages/skills";
import Projects from "./Componenets/Pages/project";
import Whatsapp from "./Componenets/SubComponents/whatsapp/whatsapp";
import Footer from "./Componenets/SubComponents/footer/footer";
import Loading from "./Componenets/loading/loading"

function App() {

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000,  // Animation duration
    });
  }, []);  // Empty dependency array to only run once
  useEffect(() => {
    const copy = (e)=>{
      e.preventDefault();
      alert("Not able to copy")
    }
  
  }, )
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </Router>
    // <Loading/>
  );
}

export default App;
