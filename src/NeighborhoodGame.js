import React, { useState } from 'react';
import { images } from './images';
import './App.css';

const neighborhoodQuestions = [
"still working on it"

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