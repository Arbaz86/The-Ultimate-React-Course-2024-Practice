import { useQuiz } from "../contexts/QuizContext";
import { PropTypes } from "prop-types";

const Options = ({ question }) => {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : index === answer
                ? "wrong"
                : ""
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

Options.propTypes = {
  question: PropTypes.any.isRequired,
};

export default Options;
