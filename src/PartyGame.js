import React, { useState } from 'react';
import { images } from './images';
import './App.css';

const partyQuestions = [
  'Who would you dance with?',
  'Who brings the best snacks?',
  'Who is the life of the party?',
  'Who would you avoid at the party?',
];

const PartyGame = ({ setCurrentGame }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');
  const [isPickDisabled, setIsPickDisabled] = useState(false);

  const nextParty = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % partyQuestions.length);
    setCurrentImage('');
    setIsPickDisabled(false);
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

  return (
    <div id="partyGame" className="game-page">
      <h2 className="question">{partyQuestions[currentQuestionIndex]}</h2>
      <div id="imageContainer">
        {currentImage ? (
          <img src={currentImage} alt="game" />
        ) : (
          <p>No image selected</p>
        )}
      </div>
      <div className="buttons">
        <button onClick={nextParty}>Next</button>
        <button onClick={pickParty} disabled={isPickDisabled}>Pick</button>
        <button onClick={replayParty}>Replay</button>
        <button onClick={() => setCurrentGame('homePage')}>Back to Home</button>
      </div>
    </div>
  );
};

export default PartyGame;