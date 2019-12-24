import React from "react";
import "./App.css";
import useMyState from "./useMyState";

function App() {
  const {
    start,
    handleChange,
    text,
    timeRemaining,
    startGame,
    wordsCount,
    textBoxRef
  } = useMyState(60);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <p>
        To get the most accurate result, we recommend opening a random book or
        article and transcribing the text from there. Press start and begin
        typing right away! When the timer is up, you will get your result.
      </p>
      <textarea
        ref={textBoxRef}
        disabled={!start}
        onChange={handleChange}
        value={text}
        placeholder="type here"
      />
      <h4>Time remaining: {timeRemaining} </h4>
      <button disabled={start} onClick={startGame}>
        start
      </button>
      <h4>
        Result:
        {timeRemaining === 0 ? ` ${wordsCount(text)} words per minute.` : ""}
      </h4>
    </div>
  );
}

export default App;
