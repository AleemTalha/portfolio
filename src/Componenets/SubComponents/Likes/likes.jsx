import React from "react";
import "./likes.css";

const Likes = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 text-center">
          <h1 className="fw-bold text-decoration-underline">Hobbies and What I Like</h1>
          <p className="fs-5 mt-3">
            I have always been fascinated by the elegance and power of luxury cars, especially Audi. Their sleek designs, advanced technology, and high-speed performance make them a true masterpiece on the road. Driving an Audi is not just about transportation; it's an experience that blends comfort and thrill perfectly.
          </p>
          <p className="fs-5 mt-3">
            Apart from my love for cars, I find peace and relaxation in gardening. The sight of lush green plants and vibrant flowers is incredibly refreshing. Gardening is more than a hobby for me; it’s a way to connect with nature, relieve stress, and create a serene environment around me.
          </p>
        </div>

        <div className="col-lg-6">
          <div className="row m-0">
            <div className="col-6 mb-4 d-flex justify-content-end">
              <div className="flip-card flip-card-1">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/imgs/garden.png" alt="Gardening" />
                  </div>
                  <div className="flip-card-back">
                    <h1>Gardening</h1>
                    <p>Peace & Serenity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mb-4 d-flex justify-content-start align-items-end">
              <div className="flip-card flip-card-2">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/imgs/audi 2.png" alt="Audi" />
                  </div>
                  <div className="flip-card-back">
                    <h1>Audi Car</h1>
                    <p>Luxury & Speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-0">
            <div className="col-6 mb-4 d-flex justify-content-end">
              <div className="flip-card flip-card-1">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/imgs/audi 1.png" alt="Audi" />
                  </div>
                  <div className="flip-card-back">
                    <h1>Audi Car</h1>
                    <p>Luxury & Speed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mb-4">
              <div className="flip-card flip-card-2">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/imgs/garden 2.png" alt="Gardening" />
                  </div>
                  <div className="flip-card-back">
                    <h1>Gardening</h1>
                    <p>Nature & Relaxation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Likes;
