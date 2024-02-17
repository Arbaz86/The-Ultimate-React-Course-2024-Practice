import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(step);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setStep((prev) => prev - 1)}>-</button>
        <span>Step: {step} </span>
        <button onClick={() => setStep((prev) => prev + 1)}>+</button>
      </div>
      <div className="buttons">
        <button onClick={() => setCount((prev) => prev - step)}>-</button>
        <span>Count: {count} </span>
        <button onClick={() => setCount((prev) => prev + step)}>+</button>
      </div>

      <h3>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${-count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </h3>
    </div>
  );
}

export default App;
