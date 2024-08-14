import { createContext, useContext, useEffect, useReducer } from "react";
import { PropTypes } from "prop-types";

const QuizContext = createContext();

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  topic: "react",
  secondsRemaining: null,
};

const SECS_PER_QUESTION = 30;

function reducer(state, { type, payload }) {
  switch (type) {
    case "loading":
      return { ...state, status: "loading" };

    case "dataReceived": {
      return { ...state, questions: payload, status: "ready" };
    }
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions?.length * SECS_PER_QUESTION,
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      const storePoints =
        payload === question.correctOption
          ? state.points + question.points
          : state.points;

      return {
        ...state,
        answer: payload,
        points: storePoints,
      };
    }
    case "nextQuestion": {
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    }

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "setTopic":
      return { ...state, topic: payload };
    case "tick":
      return {
        ...state,
        status: "finished",
      };
    default:
      return state;
  }
}

function QuizProvider({ children }) {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      highscore,
      topic,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(() => {
    async function getQuestions() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(
          `http://localhost:8000/questions?topic=${topic}`
        );
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }

    getQuestions();
  }, [topic]);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

QuizProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

function useQuiz() {
  const context = useContext(QuizContext);
  console.log(context);

  if (context === undefined)
    throw new Error("QuizContext was used outside the QuizProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { QuizProvider, useQuiz };
