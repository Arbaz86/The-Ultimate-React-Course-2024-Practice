import PropTypes from "prop-types";

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
  }
};

NextButton.propTypes = {
  dispatch: PropTypes.any.isRequired,
  answer: PropTypes.number,
  index: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
};

export default NextButton;
