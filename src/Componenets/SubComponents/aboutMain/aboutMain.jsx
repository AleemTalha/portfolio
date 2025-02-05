import React from "react";
import Typer from "../typingeffect/typingeffect";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./aboutmain.css";
const aboutMain = () => {
  return (
    <div>
      <div className="row p-0 m-0 g-0 p-lg-5 p-md-3 p-3 ">
        <div className="col-lg-12 text-center">
          <div className="display-4">About Me</div>
          <div className="fs-custom">
            <Typer />
          </div>

          <div className="fs-5 pt-lg-5 pt-md-4 pt-3">
            Hi, I'm Aleem. I am a web developer with a strong passion for
            creating easy-to-use and fast websites. From a young age, I have
            been fascinated by technology, which inspired me to build a career
            in it. I started by learning basic HTML and CSS, and over time, I
            learned more advanced skills like JavaScript, React, Node.js, and
            Express. I enjoy solving problems and finding efficient solutions
            through code.
            <br />
            <br />
            <div className="d-none d-md-block">
              I believe web development is about turning ideas into reality and
              making sure users have a smooth experience while using websites.
              Each project I work on brings new challenges and opportunities to
              grow. I'm always excited to learn new tools and technologies that
              help me become a better developer and create even better web
              experiences.
            </div>
          </div>
          <div
            className="scroll-prompt pt-5"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <p className="fs-4">Scroll down to learn more!</p>
            <i className="b- bi-box-arrow-in-down h3"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutMain;
