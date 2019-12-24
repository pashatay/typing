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
  } = useMyState(10);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <p>
        To get the most accurate score, we recommend opening any random book or
        article and re-type the text from there. Press start and start typing
        right away. When the time is over, you will get your score.
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
