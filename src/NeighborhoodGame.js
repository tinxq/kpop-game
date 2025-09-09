import React, { useState } from 'react';
import { images } from './images';
import './App.css';

const neighborhoodQuestions = [
 "who lives nextdoor",
 "ur childhood bestfriend",
 "the neighborhood bully",
 "you are his secret crush",
  "who is ur soulmate",
  "who is ur teenage ex",
 "ho protects u from boys",
 "who is ur first love",
 "who is ur childhood crush",
 "who is the most popular but red flag",
 "who is the green flag ",
 "who is ur current ex",
 "who is ur unemployed uncle",
 "who stole ur first kiss",
 "who was ur first date",
 "who alwyays pranks u",
 " who hates you since u were born",
 "who is your brother",
 "who is your brother's boyfriend",
"who is your parents' favorite",
"who is ur step dad's son",
"who killed your pet",
"end up with",


];

const NeighborhoodGame = ({ setCurrentGame }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');
  const [isPickDisabled, setIsPickDisabled] = useState(false);
  const [results, setResults] = useState(Array(neighborhoodQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const nextNeighborhood = () => {

    if (currentImage) {
      const newResults = [...results];
      newResults[currentQuestionIndex] = {
        question: neighborhoodQuestions[currentQuestionIndex],
        image: currentImage
      };
      setResults(newResults);
    }


    if (currentQuestionIndex === neighborhoodQuestions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setCurrentImage('');
      setIsPickDisabled(false);
    }
  };

  const pickNeighborhood = () => {
    if (!isPickDisabled) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(randomImage);
      setIsPickDisabled(true);
    }
  };

  const replayNeighborhood = () => {
    setCurrentImage('');
    setIsPickDisabled(false);
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setCurrentImage('');
    setIsPickDisabled(false);
    setResults(Array(neighborhoodQuestions.length).fill(null));
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div id="resultsPage" className="game-page">
        <h2>Neighborhood Game Results</h2>
        <div className="results-container">
          {results.map((result, index) => (
            <div key={index} className="result-item">
              <h3>{result ? result.question : neighborhoodQuestions[index]}</h3>
              {result ? (
                <img src={result.image} alt="Result" />
              ) : (
                <p>empty</p>
              )}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={resetGame}>Play Again</button>
          <button onClick={() => setCurrentGame('homePage')}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (

    <div id="neighborhoodGame" className="game-page">
      <div className="progress">
        Question {currentQuestionIndex + 1} of {neighborhoodQuestions.length}
      </div>
      <h2 className="question">{neighborhoodQuestions[currentQuestionIndex]}</h2>
      <div id="imageContainer">
        {currentImage ? (
          <img src={currentImage} alt="Selected" />
        ) : (
          <p>Pick </p>
        )}
      </div>
      <div className="buttons">
        <button onClick={nextNeighborhood}>
          {currentQuestionIndex === neighborhoodQuestions.length - 1 ? 'See Results' : 'Next'}
        </button>
        <button onClick={pickNeighborhood} disabled={isPickDisabled}>Pick</button>
        <button onClick={replayNeighborhood}>Replay</button>
        <button onClick={() => setCurrentGame('homePage')}>Back to Home</button>
      </div>
    </div>
  );
};

export default NeighborhoodGame;