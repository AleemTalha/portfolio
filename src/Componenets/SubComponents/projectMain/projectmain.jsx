import React from "react";
import "./projectmain.css";

const ProjectMain = () => {
  return (
    <div className="project-main">
      <div className="caption">
        <div className="text-center">
        
          <div
            className="display-3"
            style={{ color: "yellow" }}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Welcome to my projects!
          </div>

          <p
            className="project-description transition-all pt-lg-5 pt-4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Here, you will find a collection of my best work, carefully crafted
            with passion and precision. Each project reflects my journey as a
            developer, showcasing creativity, problem-solving, and innovation.
          </p>

          <p
            className="project-message transition-all"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Take a look around, explore my projects, and get inspired! Whether
            it's web applications, design experiments, or backend solutions,
            every piece of work represents a step towards excellence.
          </p>

          <button
            className="explore-btn mt-4 transition-all rounded-4 border border-2"
            data-aos="flip-up"
            data-aos-duration="1500"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            Explore My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
