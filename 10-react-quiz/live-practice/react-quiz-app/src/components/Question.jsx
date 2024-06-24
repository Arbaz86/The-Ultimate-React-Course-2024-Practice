import PropTypes from "prop-types";
import Options from "./Options";

const Question = ({ question, dispatch, answer }) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  dispatch: PropTypes.any.isRequired,
  answer: PropTypes.number,
};

export default Question;
