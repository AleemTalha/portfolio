import React from "react";
import { NavLink } from "react-router-dom";
import Typer from "../typingeffect/typingeffect";
import heroImage from "/imgs/hero-img.png";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <link rel="preload" as="image" href="/imgs/hero-bg.webp" type="image/webp" />

      <div className="hero-bg">
        <div className="hero-section">
          <section className="row p-0 g-0 px-xl-5 pt-lg-5 p-5 px-lg-4 px-md-3 px-2 text-light">
            <div
              className="col-lg-6 text-center text-lg-start"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <h1 className="p-0 m-0 display-6">
                I'm <span style={{ color: "#FFEB3B" }}>Aleem Talha</span>,<br />
                A Passionate <span style={{ color: "#FFEB3B" }}>Web Developer</span>
              </h1>
              <h3 className="fonts pt-3 p-0 m-0 typing-text">
                <Typer />
              </h3>
              <p className="pt-lg-5 pt-3">
                I specialize in <b>front-end</b> and <b>back-end development</b>,
                creating fast, responsive websites. With a focus on delivering
                <b> quality</b> and user-centric designs, I aim to bring ideas to
                life and ensure seamless digital experiences.
              </p>
              <div className="pt-lg-5 pt-2">
                <button
                  className="btn-hover transition-all elong px-4 py-2"
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                >
                  Take a Tour
                </button>
                <NavLink to="/contact" className="Contact-btn transition-all text-decoration-none">
                  Contact Us
                </NavLink>
              </div>
            </div>

            <div
              className="col-lg-6 justify-content-center d-flex pt-5"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <img src={heroImage} className="hero-img" alt="Hero" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
