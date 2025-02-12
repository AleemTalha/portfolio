import React, { useState } from "react";
import "./education.css";
import Card from "../card/card";
import data from "../../../data/education";

const Education = () => {

  return (
    <div
      className="container-fluid m-0 p-3 pb-5"
      id="education"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{ background: "transparent", minHeight: "100vh" }}
    >
      <h1 className="text-center text-decoration-underline pt-5">Education</h1>
      <h2 className="m-0 ps-lg-3 text-center text-lg-start pt-4">
        My Educational Journey and Aspirations
      </h2>
      <div className="row g-4 m-0 p-0 card-group w-100 pb-lg-5 pb-0">
        {data.length > 0 ? (
          data.map((e, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              data-aos-duration="1000"
              data-aos-once="true"
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
