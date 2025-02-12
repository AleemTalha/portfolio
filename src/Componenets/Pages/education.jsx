import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/education";
import "./pages.css";

const Education = () => {
  const { title } = useParams(); 
  const educationData = data.find((item) => item.title === title);
  if (!educationData) {
    return <div>No data available</div>;
  }
  const { text, description } = educationData; 
  return (
    <div className="container-fluid pb-3" style={{minHeight:"100vh" , paddingTop : "150px"}}>
      <div className="education-page">
      <h1 className="education-title">{title}</h1>
      <p className="education-text">{text}</p>
      {description && <div className="education-description">{description}</div>}
    </div>
    </div>
  );
};

export default Education;
