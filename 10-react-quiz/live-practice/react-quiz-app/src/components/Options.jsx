import PropTypes from "prop-types";

const Options = ({ question }) => {
  return (
    <div className="options">
      {question.options.map((option) => (
        <button key={option} className="btn btn-option">
          {option}
        </button>
      ))}
    </div>
  );
};

Options.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Options;
