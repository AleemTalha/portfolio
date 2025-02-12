import React from "react";
import "./skillsmain.css";
import { NavLink } from "react-router-dom";

const skillsmain = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="skill-container p-lg-4 p-md-3 p-2 pt-5 pt-lg-4 pt-md-3">
        <div className="skillsinside pt-5 pt-md-0">
          <div className="skillsmain-container row p-0 m-0 text-center">
            <div className="col-lg-6 d-flex flex-column justify-content-center text-light">
              <div className="skills-title display-4 pb-4">
                Explore My <span style={{ color: "yellow" }}>Skills</span> and{" "}
                <span style={{ color: "yellow" }}>Expertise</span>
              </div>
              <div>
                I am a passionate developer with many projects in front-end and
                back-end technologies. My skills in React, JavaScript, CSS,
                Node.js, Express, and MongoDB have empowered me to build dynamic
                and high-performing applications.
              </div>
              <div className="container-fluid pt-lg-5 pt-md-4 pt-3">
                <button onClick={scrollToSkills} className="view-skills">
                  View Skills
                </button>
                <NavLink
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
                </NavLink>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img src="imgs/skills-min.png" alt="Skills" />
            </div>
          </div>
        </div>
      </div>
      <div id="skills-section">{/* <Skillshero /> */}</div>
    </>
  );
};

export default skillsmain;
