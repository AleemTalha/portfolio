import React from "react";
import "./card.css";

const CustomCard = (props) => {
  return (
    <div className="text-center custom-card">
      {props.image && (
        <img className="custom-card-img" src={props.image} alt="Card" />
      )}
      <div className="custom-card-body">
        <div className="card-body-text">
          <div className="custom-card-title fs-4">{props.title}</div>
          <p className="custom-card-text">{props.text}</p>
        </div>
        <button className="custom-card-button">Learn More</button>
      </div>
    </div>
  );
};

export default CustomCard;
