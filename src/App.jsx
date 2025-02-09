import React, { useEffect } from "react";  // Make sure to import useEffect
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./Componenets/SubComponents/navbar/navbar";
import Home from "./Componenets/Pages/Home";
import About from "./Componenets/Pages/about";
import Contact from "./Componenets/Pages/contact";
import Skills from "./Componenets/Pages/skills";
import Projects from "./Componenets/Pages/project";
import Whatsapp from "./Componenets/SubComponents/whatsapp/whatsapp";
import Footer from "./Componenets/SubComponents/footer/footer";
import Loading from "./Componenets/loading/loading"
import { Provider, useSelector,useDispatch } from "react-redux";
import { store } from "./redux/store";

function App() {

  useEffect(() => {
    AOS.init({
      
    });
  }, []); 
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
