import { useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";

const Timer = () => {
  const { secondsRemaining, dispatch } = useQuiz();

  const [timer, setTimer] = useState(secondsRemaining);
  const minuts = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          dispatch({ type: "tick" });
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [dispatch]);

  return (
    <div className="timer">
      {minuts > 9 ? minuts : `0${minuts}`}:
      {seconds > 9 ? seconds : `0${seconds}`}
    </div>
  );
};

export default Timer;
