import React, { useState } from "react";
import { questions } from "../utils/constant";

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.length > 0 &&
        questions.map((question) => (
          <div
            onClick={() => handleClick(question.id)}
            key={question.id}
            className={selectedId === question.id ? "selected" : ""}
          >
            <p>
              {selectedId === question.id ? question.answer : question.question}
            </p>
          </div>
        ))}
    </div>
  );
};

export default FlashCards;
