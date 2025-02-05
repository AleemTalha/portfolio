import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import "react-bootstrap";

const Navbar = () => {
  const getLinkClass = ({ isActive }) => {
    return isActive
      ? "activenav transition-all text-decoration-none"
      : "text-decoration-none transition-all";
  };

  const navLinks = [
    { to: "/", text: "Home", title: "Home - Your Website" },
    { to: "/about", text: "About", title: "About - Your Website" },
    { to: "/projects", text: "Projects", title: "Projects - Your Website" },
    { to: "/skills", text: "Skills", title: "Skills - Your Website" },
    { to: "/contact", text: "Contact Us", title: "Contact - Your Website" },
  ];

  return (
    <nav className="sticky-top py-md-4 py-3 mb-2 navbar navbar-expand-lg navbar-light px-xl-5 px-lg-4 px-md-3 px-3 d-flex justify-content-between align-items-center p-0 m-0">
      <NavLink
        to="/"
        className="text-decoration-none brand transition-all cursor-pointer h4 me-5"
        onClick={() => (document.title = "Home - Your Website")}
      >
        <span style={{ border: "0" }}>Aleem T.Dev</span>
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ color: "white", backgroundColor: "white" }}
      >
        <span className="navbar-toggler-icon v-hover"></span>
      </button>

      <div className="collapse navbar-collapse mt-5 mt-lg-0" id="navbarNav">
        <div
          className="Link d-flex justify-content-center flex-column flex-lg-row justify-self-center gap-5"
          style={{ flex: 1, fontSize: "19px" }}
        >
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={getLinkClass}
              onClick={() => (document.title = link.title)}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="d-none d-lg-block">
        <NavLink
          to="/contact"
          className="h6 transition-all text-decoration-none bg-danger rounded Contact-btn"
          onClick={() => (document.title = "Contact - Your Website")}
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
