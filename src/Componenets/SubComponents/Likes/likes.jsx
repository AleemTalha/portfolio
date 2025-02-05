import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./likes.css";

const Likes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const [content] = useState([
    {
      title: "Audi R8",
      description: [
        "The Audi R8 is a dream car for me. Its design and performance have always impressed me. The R8 is a luxury sports car with a V10 engine and offers an exhilarating driving experience. Its stability and handling in high-speed runs and cornering are unmatched.",
        "The engineering of the R8 is top-notch, and it gives you a constant feeling of high performance. The sleek looks of the car are absolutely jaw-dropping. It's the perfect blend of comfort and speed for those who appreciate both.",
      ],
    },
    {
      title: "Gardening",
      description: [
        "Gardening is not just a hobby for me, it's a passion. Whenever I grow plants or design new flower beds, I find peace and fulfillment. It’s a way to connect with nature and learn something new every day.",
        "The satisfaction I get from gardening is unmatched. Growing plants, taking care of them, and building something with my hands is something I truly value. It helps me reduce stress and also makes my surroundings more beautiful.",
      ],
    },
  ]);

  return (
    <div className="pt-lg-5 pt-md-3 pt-2 pb-lg-5 pb-md-3 pb-2 like">
      <section className="row m-0">
        <div
          className="display-3 fw-normal text-center"
          style={{ color: "#fa004b" }}
          data-aos="fade-down"
        >
          Passion Points
        </div>
        <div className="col-lg-6 text-xl-start text-center pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2 pt-1">
          {content.map((item, index) => (
            <div
              key={index}
              className="container-fluid mt-4"
              data-aos="fade-right"
              data-aos-delay={index * 300}
            >
              <div className="display-6 fw-normal" style={{ color: "#0055ff" }}>
                {item.title}
              </div>
              {item.description.map((text, idx) => (
                <div key={idx} className="fs">{text}</div>
              ))}
            </div>
          ))}
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-center"
          data-aos="fade"
          data-aos-delay="300"
        >
          <div className="img-container row g-0 pt-xl-5 pt-lg-4 pt-md-3 pt-sm-2 pt-1">
            <div
              className="col-6 img-wrapper-1 p-2 img-1"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="/garden 2.jpg"
                      alt="Garden View"
                      className="custom-img"
                    />
                  </div>
                  <div className="flip-card-back">
                    <div className="fs">
                      <h1>Garden</h1>
                      <p>
                        A peaceful and refreshing place filled with lush greenery,
                        offering a perfect escape into nature.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-6 img-wrapper-2 p-2 img-2"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="/audi 2.jpg"
                      alt="Audi R8 Side Profile"
                      className="custom-img"
                    />
                  </div>
                  <div className="flip-card-back">
                    <div className="fs">
                      <h1>Audi R8</h1>
                      <p>
                        A masterpiece of engineering with a sleek side profile,
                        showcasing speed, luxury, and power.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-6 img-wrapper-1 p-2 img-3"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="/audi 1.jpg"
                      alt="Audi R8 Rear View"
                      className="custom-img"
                    />
                  </div>
                  <div className="flip-card-back">
                    <div className="fs">
                      <h1>Audi R8</h1>
                      <p>
                        A breathtaking rear view with bold taillights and an
                        aggressive stance, built for high performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-6 img-wrapper-2 p-2 img-4"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="/garden.jpg"
                      alt="Beautiful Garden"
                      className="custom-img"
                    />
                  </div>
                  <div className="flip-card-back">
                    <div className="fs">
                      <h1>Garden</h1>
                      <p>
                        An enchanting garden filled with vibrant flowers and fresh
                        air, bringing tranquility and joy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Likes;
