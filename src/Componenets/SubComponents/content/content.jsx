import React from "react";
import "./content.css";

const content = () => {
  return (
    <div className="row  m-0 p-0 text-light p-lg-5 p-md-3 p-2" style={{ minHeight: "70vh" }}>
        <div className="display-5 text-center fw-bold pt-5">
          Why Us
        </div>
      <div className="col-lg-6 d-flex justify-content-center text-center text-lg-start align-items-center flex-column">
        <div>
          In today’s fast-paced digital world, having a strong online presence is more important than ever. We specialize in building dynamic, responsive, and user-centric websites that elevate your business or personal brand. Whether it’s a simple landing page or a full-scale web application, we create tailored solutions that help you stand out.
          <div className="pt-2"></div>
          Our expertise spans across sleek, modern designs, intuitive interfaces, and powerful backend functionality. We are dedicated to delivering websites that provide seamless user experiences, no matter the device or screen size.
          <div className="pt-2"></div>
          Every project is crafted with attention to detail, ensuring a balance between aesthetics and performance. Explore our portfolio to see how we can transform your vision into a fully functional and engaging digital experience.
        </div>
      </div>

      <div className="col-lg-6 d-flex justify-content-center align-items-center">
        <img
          src="/imgs/why-us.png"
          alt="Why Us"
          className="img-fluid custom-why-img"
        />
      </div>
    </div>
  );
};

export default content;
