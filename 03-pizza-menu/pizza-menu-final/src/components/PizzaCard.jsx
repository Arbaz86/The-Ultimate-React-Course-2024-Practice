import React from "react";

const PizzaCard = ({ photoSrc, name, ingredients, soldOut, price }) => {
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoSrc} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : "$" + price}</span>
      </div>
    </li>
  );
};

export default PizzaCard;
