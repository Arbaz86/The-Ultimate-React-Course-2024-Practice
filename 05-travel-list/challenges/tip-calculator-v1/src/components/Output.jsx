import React from "react";

const Output = ({ bill, tip }) => {
  return (
    <h2>
      You pay ${Number(bill) + tip} (${bill} + ${tip} tip)
    </h2>
  );
};

export default Output;
