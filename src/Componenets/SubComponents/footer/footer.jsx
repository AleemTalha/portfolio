import React , {memo} from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer py-md-5 py-2 px-lg-5 px-md-3 px-2 text-lg-start text-center px-lg-3 text-light px-sm-2 d-flex align-items-center justify-content-center flex-column flex-lg-row">
      <div className="col-lg-6"
      //  data-aos="fade-right"
       >
        Crafted with Passion & Precision by <span className="text-decoration-underline" style={{textUnderlineOffset: "5px "}}>Aleem T.Dev</span>. © 2025 All Rights
        Reserved.
      </div>
      <div className="col-lg-6 px-5 d-flex justify-content-end gap-3 p-0 m-0 pt-3 pt-lg-0">
        <a href="https://www.instagram.com" target="_blank">
          <i
            className="bi bi-instagram transition-all icon_instagram border rounded-5 px-2 py-1 h4"
            // data-aos="zoom-in"
            // data-aos-delay="200"
          ></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i
            className="bi bi-linkedin  transition-all icon_linkedin border rounded-5 px-2 py-1 h4"
            // data-aos="zoom-in"
            // data-aos-delay="400"
          ></i>
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <i
            className="bi bi-facebook  transition-all icon_facebook border rounded-5 px-2 py-1 h4"
            // data-aos="zoom-in"
            // data-aos-delay="600"
          ></i>
        </a>
        <a href="https://github.com" target="_blank">
          <i
            className="bi bi-github  transition-all icon_github border rounded-5 px-2 py-1 h4"
            // data-aos="zoom-in"
            // data-aos-delay="800"
          ></i>
        </a>
      </div>
    </footer>
  );
};

export default  memo(Footer);
