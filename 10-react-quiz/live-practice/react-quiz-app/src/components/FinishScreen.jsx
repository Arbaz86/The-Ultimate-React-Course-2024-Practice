import { PropTypes } from "prop-types";

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className="result">
      <p>
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>

      <p className="highscrore">(Highscore: {highscore} points)</p>
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

FinishScreen.propTypes = {
  points: PropTypes.number.isRequired,
  maxPossiblePoints: PropTypes.number.isRequired,
  highscore: PropTypes.number.isRequired,
  dispatch: PropTypes.any.isRequired,
};

export default FinishScreen;
