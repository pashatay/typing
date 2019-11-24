import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const STARTING_TIME = 15;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [start, setStart] = useState(false);
  const textBoxRef = useRef(null);

  function startGame() {
    setStart(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  useEffect(() => {
    if (start && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setStart(false);
    }
  }, [timeRemaining, start]);
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function wordsCount(text) {
    const words = text.trim().split(" ");
    return words.filter(word => word !== "").length;
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
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
      <h4>Word count:{timeRemaining === 0 ? wordsCount(text) : "???"} </h4>
    </div>
  );
}

export default App;
