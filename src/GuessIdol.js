import React, { useState, useEffect } from "react";

const questions = [
  { image: "/groups/logo2.jpg", answer: "seventeen" },
  { image: "/groups/logo1.jpg", answer: "twice" },
  { image: "groups/logo3.jpg", answer: "bts" },
  { image: "groups/logo4.jpg", answer: "lesserafim" },
  { image: "groups/logo5.jpg", answer: "txt" },
  { image: "groups/logo6.jpg", answer: "exo" }
];

export default function GuessIdol() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [knewIt, setKnewIt] = useState(false);

  useEffect(() => {
    if (showAnswer) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [showAnswer]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowAnswer(true);
    }
  }, [timeLeft]);

  const handleKnewIt = () => {
    if (!knewIt) {
      setScore(score + 1); // تعطي نقطة
      setKnewIt(true);
    }
    setShowAnswer(true);
  };

  const handleIDK = () => {
    setShowAnswer(true); // لا نقطة عند الضغط على IDK
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setShowAnswer(false);
      setTimeLeft(5);
      setKnewIt(false);
    } else {
      setShowAnswer("finished");
    }
  };

  if (showAnswer === "finished") {
    return (
      <div className="result">
        <h2>Finished</h2>
        <p>
          Your score: {score} out of {questions.length}
        </p>
      </div>
    );
  }

  return (
    <div className="game-container">
      <h1>Guess the group</h1>
      <div className="card">
        {!showAnswer ? (
          <>
            <div className="timer">⏱ Time left: {timeLeft}s</div>
            <img
              src={questions[current].image}
              alt="idol"
              className="idol-image"
            />
            <div className="buttons">
              <button onClick={handleKnewIt} className="option-btn">
                Ik it!
              </button>
              <button onClick={handleIDK} className="option-btn idk-btn">
                IDK
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="answer">Answer: {questions[current].answer}</p>
            <button onClick={nextQuestion} className="next-btn">
              Next
            </button>
          </>
        )}
        <p className="progress">
          Question {current + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
}
