import React, { useState } from "react";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import BillInput from "./BillInput";
import Reset from "./Reset";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip =
    (Number(bill) * (Number(percentage1) + Number(percentage2))) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <BillInput onSetBill={setBill} bill={bill}>
        How much was the bill?
      </BillInput>

      <SelectPercentage
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        How did you like the service?
      </SelectPercentage>

      <SelectPercentage
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
};

export default TipCalculator;
