import React, { useState } from 'react';
import { images } from './images';
import './App.css';

const partyQuestions = [
  'Who invites you to the party?',
  'Who would you trust to drive you home?',
'who would keep flirting with u all night ?',
'who is your cousin ?',
' who would make you blush the whole night ?',
'who will playfully fight for your attention ?',
'who will hold your waist while dancing ?',
'who will make fun of ur outfit ?',
'who is your ex ?',
  'who is ur best friend ?',
  'who would kiss ur best friend',
' who would spill a drink on you and never say sorry?',
' who would play seven minutes in heaven with you ?',
'who would take you to get food ?',
'who would you throw up on ?',
'who would you sneak out with ?',
' who secretly keep staring at you all night ?',
'who would suddenly admit that he is gay ?',
'who keeps pushing you on purpose while dancing ?',
  'Who would you make out  with at the party?',
  'end up with who at the party?'
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