import React from "react";
import { NavLink } from "react-router-dom";
import Typer from "../typingeffect/typingeffect";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="hero-section pt-5 pb-5" data-aos="fade" data-aos-delay="300">
        <section className="row p-0 g-0 px-xl-5 pt-lg-5 p-5 px-lg-4 px-md-3 px-2 text-light ">
          <div className="col-lg-6 text-center text-lg-start"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="300"
          >
            <h1 className="p-0 m-0">
              I'm <span style={{ color: "#FFEB3B" }}>Aleem Talha</span>,
              <br /> A Passionate{" "}
              <span style={{ color: "#FFEB3B" }}>Web Developer</span>
            </h1>
            <h3
              className=" fonts pt-3 p-0 m-0 typing-text"
              style={{ overflow: "ellipse" }}
            >
              <Typer />
            </h3>
            <p className="pt-lg-5 pt-3">
              I specialize in <b>front-end</b> and <b>back-end development</b>,
              creating fast, responsive websites. With a focus on delivering{" "}
              <b>quality</b> and user-centric designs, I aim to bring ideas to
              life and ensure seamless digital experiences.
            </p>
            <div className="pt-lg-5 pt-2">
              <button
                className="btn-hover transition-all elong"
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
              >
                Take a Tour
              </button>
              <NavLink
                to="/contact"
                className="Contact-btn transition-all text-decoration-none"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6 justify-content-center d-flex pt-5"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="500"
          >
            <img src="/hero-img.png" className="hero-img" alt="Hero" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
