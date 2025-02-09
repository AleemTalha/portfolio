import React from "react";
import "./quotes.css";

const hobbies = () => {
  return (
    <div className="cd-section p-lg-5 p-md-3 p-2">
      <div className="quote-section py-4 text-center text-lg-start row">
        <div
          className="col-lg-4 col-12 mt-2 mt-lg-0 d-flex justify-content-center align-items-center"
          data-aos="fade"
          data-aos-delay="0"
          data-aos-duration="1000"
        >
          <div className="quote-box border">
            <i>
              "The function of good software is to make the complex appear to be
              simple."
            </i>
            <h6 className="pt-lg-5 pt-3">
              <i>— Grady Booch</i>
            </h6>
          </div>
        </div>
        <div
          className="col-lg-4 col-12 d-flex mt-2 mt-lg-0 d justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="quote-box border">
            <i>
              "Success is not final, failure is not fatal: It is the courage to
              continue that counts."
            </i>
            <h6 className="pt-lg-5 pt-3">
              <i>— Winston Churchill</i>
            </h6>
          </div>
        </div>
        <div
          className="col-lg-4 col-12 d-flex mt-2 mt-lg-0 d justify-content-center align-items-center"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <div className="quote-box border">
            <i>
              "Programming is not about what you know; it’s about what you can
              figure out."
            </i>
            <h6 className="pt-lg-5 pt-3">
              <i>— Anonymous</i>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hobbies;
