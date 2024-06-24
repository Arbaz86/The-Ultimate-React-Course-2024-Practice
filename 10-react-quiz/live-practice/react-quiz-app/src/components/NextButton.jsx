import PropTypes from "prop-types";

const NextButton = ({ dispatch, answer }) => {
  if (answer === null) return null;

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
};

NextButton.propTypes = {
  dispatch: PropTypes.any,
  answer: PropTypes.number,
};

export default NextButton;
