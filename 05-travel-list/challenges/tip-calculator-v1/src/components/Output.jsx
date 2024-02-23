import React from "react";

const Output = ({ bill, tip }) => {
  return (
    <h2>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h2>
  );
};

export default Output;
