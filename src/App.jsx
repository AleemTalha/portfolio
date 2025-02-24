import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Componenets/SubComponents/navbar/navbar";
import Home from "./Componenets/Pages/Home";
import About from "./Componenets/Pages/about";
import Contact from "./Componenets/Pages/contact";
import Skills from "./Componenets/Pages/skills";
import Projects from "./Componenets/Pages/project";
import Whatsapp from "./Componenets/SubComponents/whatsapp/whatsapp";
import Footer from "./Componenets/SubComponents/footer/footer";
import Education from "./Componenets/Pages/education";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education/:title" element={<Education />} />
        <Route
          path="*"
          element={
            <div className="text-center pt-5 mt-5 text-light">
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </div>
          }
        />
      </Routes>
      <Whatsapp />
      <Footer />
    </Router>
  );
}

export default App;
