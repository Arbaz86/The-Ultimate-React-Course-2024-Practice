import React from "react";

const BillInput = ({ children, bill, onSetBill }) => {
  return (
    <div>
      <label>{children}</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(e.target.value)}
      />
    </div>
  );
};

export default BillInput;
