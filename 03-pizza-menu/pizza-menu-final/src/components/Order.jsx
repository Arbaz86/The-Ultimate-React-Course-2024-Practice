import React from "react";

const Order = ({ closeHour, operHour }) => {
  return (
    <div className="order">
      <p>
        We're open from {operHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
