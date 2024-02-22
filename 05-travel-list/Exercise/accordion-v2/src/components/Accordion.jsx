import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "../utils/constant";

const Accordion = () => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccordionItem
          onOpen={setCurOpen}
          key={item.title}
          num={index}
          title={item.title}
          curOpen={curOpen}
        >
          {item.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
