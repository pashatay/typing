import { useState, useEffect, useRef } from "react";

function useMyState(STARTING_TIME = 10) {
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

  return {
    start,
    handleChange,
    text,
    timeRemaining,
    startGame,
    wordsCount,
    textBoxRef
  };
}
export default useMyState;
