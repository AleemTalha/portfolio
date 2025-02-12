import React from "react";
import "./journey.css";
import { transform } from "framer-motion";

const Journey = () => {
  return (
    <div className="transition-all" data-aos="fade-up">
      <div
        className="row p-0 m-0 w-100 p-lg-5 p-md-3 p-3"
        style={{ backgroundColor :"#0A3981" }}
        data-aos="fade-up"
      >
        <div
          className="display-4 fw-bold text-center pt-lg-5 pt-3 pb-lg-5 pb-3 text-decoration-underline"
          style={{ color: "#09122c" }}
        >
          How It All Began
        </div>

        <div className="col-lg-7 pt-lg-4 pt-2">
          <div className="fs-2 text-lg-start text-center">My Journey</div>
          <div className="fs-5 pt-lg-5 pt-md-4 pt-3 text-center text-lg-start m-0 p-0">
            During my learning journey, I have had the privilege of working with
            incredible mentors who have guided me through the challenges of web
            development. One of the key experiences that shaped my path was my
            time at EVS Lahore, where I honed my skills under the mentorship of
            Sir Ali. His expertise and support have played a significant role in
            helping me become the developer I am today.
          </div>

          <div className="fs-5 d-none d-md-block pt-3 text-center text-lg-start">
            I am passionate about continuous learning and always striving to
            improve my skills. The world of web development is constantly
            evolving, and I am excited to be a part of this ever-changing
            field. My goal is to build meaningful and impactful web
            applications that improve the way people interact with the digital
            world.
          </div>
        </div>

        <div className="col-lg-5 pt-lg-4 pt-3 d-flex justify-content-center">
          <div className="journey-img border rounded-3 overflow-hidden">
            <img
              loading="lazy"
              src="/imgs/laptop1.png"
              className="w-100 rounded-3 bg-danger laptop-img"
              alt="Laptop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
