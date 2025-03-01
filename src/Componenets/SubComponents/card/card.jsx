import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const CustomCard = (props) => {

  return (
    <div className="text-center custom-card">
      {props.image && (
        <img
          className="custom-card-img"
          src={props.image}
          alt="Card"
        />
      )}
      <div className="custom-card-body">
        <div className="card-body-text">
          <div className="custom-card-title fs-4">{props.title}</div>
          <p className="custom-card-text">{props.text}</p>
        </div>
        <Link
          to={{
            pathname: `/education/${props.title}`,
            state: { title: props.title, text: props.text, image: props.image },
          }}
          onClick={()=>{alert(props.text)}}
          className="custom-edu-button"
          style={{ backgroundColor: "white", color: "#155b91" }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CustomCard;
