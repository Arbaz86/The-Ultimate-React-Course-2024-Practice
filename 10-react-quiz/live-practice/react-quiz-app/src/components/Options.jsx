import PropTypes from "prop-types";

const Options = ({ question, dispatch, answer }) => {
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
  question: PropTypes.object.isRequired,
  dispatch: PropTypes.any.isRequired,
  answer: PropTypes.number,
};

export default Options;
