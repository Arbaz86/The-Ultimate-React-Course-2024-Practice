import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";
import StartScreen from "./components/StartScreen.jsx";
import Question from "./components/Question.jsx";
import NextButton from "./components/NextButton.jsx";
import Progress from "./components/Progress.jsx";
import FinishScreen from "./components/FinishScreen.jsx";
import Footer from "./components/Footer.jsx";
import Timer from "./components/Timer.jsx";
import { useQuiz } from "./contexts/QuizContext.jsx";

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <main className="main">
        <Main>
          {status === "loading" && <Loader />}
          {status === "Error" && <Error />}
          {status === "ready" && <StartScreen />}
          {status === "active" && (
            <>
              <Progress />
              <Question />
              <Footer>
                <Timer />
                <NextButton />
              </Footer>
            </>
          )}

          {status === "finished" && <FinishScreen />}
        </Main>
      </main>
    </div>
  );
}

export default App;
