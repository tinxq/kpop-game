import React, { useState } from "react";

const questions = [
  {
    image: "assets/photo1.jpg",
    options: ["Seungkwan", "Mingyu", "Joshua"],
    answer: "Seungkwan",
  },
  {
    image: "assets/photo2.jpg",
    options: ["Hoshi", "the8", "Woozi"],
    answer: "the8",
  },
];

export default function GuessIdol() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected("");
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className="game-container">
      {!showResult ? (
        <div className="card">
          <img src={questions[current].image} alt="idol" className="idol-image" />
          <div className="options">
            {questions[current].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className={`option-btn ${
                  selected
                    ? option === questions[current].answer
                      ? "correct"
                      : option === selected
                      ? "wrong"
                      : ""
                    : ""
                }`}
                disabled={!!selected}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="progress">
            Question {current + 1} of {questions.length}
          </p>
        </div>
      ) : (
        <div className="result">
          <h2>Finished </h2>
          <p>
            Your score: {score} out of {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}