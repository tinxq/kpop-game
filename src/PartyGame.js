import React, { useState } from 'react';
import { images } from './images';
import './App.css';

const partyQuestions = [
  'Who invites you to the party?',
  'Who would you trust to drive you home?',
  'Who would keep flirting with you all night?',
  'Who is your cousin?',
  'Who would make you blush the whole night?',
  'Who will playfully fight for your attention?',
  'Who will hold your waist while dancing?',
  'Who will make fun of your outfit?',
  'Who is your ex?',
  'Who is your best friend?',
  'Who would kiss your best friend?',
  'Who would spill a drink on you and never say sorry?',
  'Who would play seven minutes in heaven with you?',
  'Who would take you to get food?',
  'Who would you throw up on?',
  'Who would you sneak out with?',
  'Who secretly keeps staring at you all night?',
  'Who would suddenly admit that he is gay?',
  'Who keeps pushing you on purpose while dancing?',
  'Who would you make out with at the party?',
  'Who would you end up with at the party?'
];

const PartyGame = ({ setCurrentGame }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');
  const [isPickDisabled, setIsPickDisabled] = useState(false);
  const [results, setResults] = useState(Array(partyQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const nextParty = () => {
    // Save the current result if an image was selected
    if (currentImage) {
      const newResults = [...results];
      newResults[currentQuestionIndex] = {
        question: partyQuestions[currentQuestionIndex],
        image: currentImage
      };
      setResults(newResults);
    }

    // Check if we've reached the end
    if (currentQuestionIndex === partyQuestions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setCurrentImage('');
      setIsPickDisabled(false);
    }
  };

  const pickParty = () => {
    if (!isPickDisabled) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(randomImage);
      setIsPickDisabled(true);
    }
  };

  const replayParty = () => {
    setCurrentImage('');
    setIsPickDisabled(false);
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setCurrentImage('');
    setIsPickDisabled(false);
    setResults(Array(partyQuestions.length).fill(null));
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div id="resultsPage" className="game-page">
        <h2>Party Game Results</h2>
        <div className="results-container">
          {results.map((result, index) => (
            <div key={index} className="result-item">
              <h3>{result ? result.question : partyQuestions[index]}</h3>
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
    <div id="partyGame" className="game-page">
      <div className="progress">
        Question {currentQuestionIndex + 1} of {partyQuestions.length}
      </div>
      <h2 className="question">{partyQuestions[currentQuestionIndex]}</h2>
      <div id="imageContainer">
        {currentImage ? (
          <img src={currentImage} alt="Selected" />
        ) : (
          <p>pick</p>
        )}
      </div>
      <div className="buttons">
        <button onClick={nextParty}>
          {currentQuestionIndex === partyQuestions.length - 1 ? 'See Results' : 'Next'}
        </button>
        <button onClick={pickParty} disabled={isPickDisabled}>Pick</button>
        <button onClick={replayParty}>Replay</button>
        <button onClick={() => setCurrentGame('homePage')}>Back to Home</button>
      </div>
    </div>
  );
};

export default PartyGame;