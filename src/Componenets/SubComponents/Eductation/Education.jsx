import React, { useState } from "react";
import "./education.css";
import Card from "../card/card";

const Education = () => {
  const [educationData] = useState([
    {
      title: "Matriculation",
      text: "Hello, I completed my Matriculation in Science from GMS, achieving 1098 marks. This laid a strong foundation for my academic journey. My time in school helped me develop strong analytical skills, which fueled my passion for understanding complex concepts and pursuing higher education in the field of technology."
    },
    {
      title: "Intermediate",
      text: "I pursued my Intermediate studies at Punjab Group of Colleges, focusing on Computer Science. I secured 455 marks in my first year and continued striving for excellence. During this time, I was introduced to programming, which sparked my interest in the world of coding and technology, pushing me to take up more challenging projects."
    },
    {
      title: "University (BSCS - UET)",
      text: "Currently, I am studying Computer Science at UET, where I am gaining in-depth knowledge of various fields, including AI and software development. I have been actively involved in learning JavaScript and other programming languages, enhancing my skills to work on real-world projects. My passion for technology has driven me to innovate and create solutions that can have a meaningful impact on society, and I am dedicated to continuously improving my expertise in this dynamic field."
    }
  ]);
  
  return (
    <div className="container-fluid m-0 p-3 pb-5" data-aos="fade-up" data-aos-duration="1000" style={{ background: "#872341" }}>
      <h1 className="text-center text-decoration-underline pt-5">Education</h1>
      <h2 className="m-0 ps-lg-3 text-center text-lg-start pt-4">My Educational Journey and Aspirations</h2>
      <div className="row g-4 m-0 p-0 card-group w-100 pb-lg-5 pb-0">
        {educationData.length > 0 ? (
          educationData.map((e, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`} 
              data-aos-duration="1000"
              // data-aos-once="true"
            >
              <Card title={e.title} text={e.text} image={e.image} />
            </div>
          ))
        ) : (
          <p>No education</p>
        )}
      </div>
    </div>
  );
};

export default Education;
