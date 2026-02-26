import React from "react";

const Cards = (props) => {
  return (
    <div className="cards">
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
    </div>
  );
};

export default Cards;
