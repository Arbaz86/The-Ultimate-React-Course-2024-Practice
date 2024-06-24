import PropTypes from "prop-types";
import Options from "./Options";

const Question = ({ question }) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} />
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Question;
