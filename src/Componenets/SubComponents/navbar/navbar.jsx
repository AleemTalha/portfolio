import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import "react-bootstrap";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const getLinkClass = ({ isActive }) => {
    return isActive
      ? "activenav transition-all text-decoration-none"
      : "text-decoration-none transition-all";
  };
  const navLinks = [
    { to: "/", text: "Home", title: "Aleem T. Dev | Home" },
    { to: "/about", text: "About", title: "About Me | Aleem T. Dev" },
    { to: "/projects", text: "Projects", title: "My Projects | Aleem T. Dev" },
    {
      to: "/skills",
      text: "Skills",
      title: "My Skills & Expertise | Aleem T. Dev",
    },
    {
      to: "/contact",
      text: "Contact Us",
      title: "Get in Touch | Aleem T. Dev",
    },
  ];
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className={`fixed-top py-md-4 py-3 mb-2 navbar navbar-expand-lg navbar-light px-xl-5 px-lg-4 px-md-3 px-3 d-flex justify-content-between align-items-center p-0 m-0 `}
      style={{ background: `${isNavOpen ? "#034f84" : ""}` }}
    >
      <Link
        to="/"
        className="text-decoration-none brand transition-all cursor-pointer h4 me-5 NavLink"
        onClick={() => (document.title = "Home - Your Website")}
      >
        <span style={{ border: "0" }}>Aleem T.Dev</span>
      </Link>

      <button
        className="navbar-toggler navbar-btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isNavOpen ? "true" : "false"}
        aria-label="Toggle navigation"
        style={{ color: "white", backgroundColor: "white" }}
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon v-hover"></span>
      </button>

      <div className="collapse navbar-collapse mt-5 mt-lg-0" id="navbarNav">
        <div
          className="Link d-flex justify-content-center flex-column flex-lg-row justify-self-center gap-5"
          style={{ flex: 1, fontSize: "19px" }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={getLinkClass}
              onClick={() => (document.title = link.title)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      <div className="d-none d-lg-block">
        <Link
          className="h6 transition-all text-decoration-none bg-danger rounded Contact-btn"
          to="#"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/aleem-cv.pdf";
            link.download = "aleem-cv.pdf"; 
            link.click();
          }}
        >
          Download CV
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
