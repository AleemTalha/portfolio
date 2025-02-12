import React from "react";
import "./skill.css"
const skillsData = [
  {
    name: "React",
    icon: "/imgs/react.png",
    color: "#58C4DC",
    progress: "100%",
  },
  {
    name: "JavaScript",
    icon: "/imgs/js.png",
    color: "#F7D800",
    progress: "100%",
  },
  { name: "C++", icon: "/imgs/c++.png", color: "#00427E", progress: "100%" },
  { name: "C#", icon: "/imgs/Csharp.png", color: "grey", progress: "85%" },
  {
    name: "Python",
    icon: "/imgs/python.png",
    color: "#FFFF00",
    progress: "70%",
  },
  { name: "SQL-Server", icon: "/imgs/sql.png", color: "grey", progress: "80%" },
  {
    name: "MongoDB",
    icon: "/imgs/mongo.png",
    color: "#47A248",
    progress: "100%",
  },
  {
    name: "Express",
    icon: "/imgs/express.png",
    color: "white",
    progress: "100%",
  },
  { name: "HTML", icon: "/imgs/html.png", color: "#E34F26", progress: "100%" },
  {
    name: "CSS",
    icon: "/imgs/css-logo.png",
    color: "#1572B6",
    progress: "100%",
  },
  {
    name: "Bootstrap",
    icon: "/imgs/bootstrap.png",
    color: "#563D7C",
    progress: "90%",
  },
  {
    name: "Bootstrap",
    icon: "/imgs/bootstrap.png",
    color: "#007ACC",
    progress: "100%",
  },
];

const Skills = () => {
  return (
    <div className="d-flex flex-column w-100 m-0 p-0">
      <h2 className="text-center my-5 text-light">My Skills</h2>
      <div className="d-flex flex-wrap justify-content-center p-3 rounded shadow-lg p-lg-5">
        {skillsData.map((skill, index) => (
          <div
            className="col-lg-3 col-md-4 col-6 text-center mb-4 p-lg-3 p-md-2 p-1 rounded"
            key={index}
            
          >
            <div className="container-fluid  rounded-4 m-0 p-0 pt-2 p-lg-3 p-md-2 p-1  skill-card"
            style={{boxShadow :"1px 3px 10px white"}}
            >
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-img"
                  style={{ width: "70px", height: "70px", marginRight: "10px", }}
                />
                <h5 className="text-light fs-4 mb-0">{skill.name}</h5>
              </div>
              <p className="text-light">{skill.progress}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
