import React from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "../utils/constant";

const Accordion = () => {
  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccordionItem key={index} {...item} num={index} />
      ))}
    </div>
  );
};

export default Accordion;
