import React, { useState } from 'react';
import { images } from './images';
import './App.css';

const schoolQuestions = [
  "Who is sitting next to you in class",
  "Who makes you laugh in class",
  "Who teases you the most",
  "Who helps you with homework",
  "Who gives you snacks",
  "Who calls you cute nicknames",
  "Who is your brother",
  "Who always notices your new hairstyle",
  "Who is your gay friend",
  "Who is your gay friend’s boyfriend",
  "Who loves to protect you",
  "Who is your partner for the school festival",
  "Who has a secret crush on you",
  "Who you have a crush on",
  "Who shares their hoodie with you",
  "Who hates you",
  "Who is your partner for the school trip",
  "Who is your childhood friend",
  " you end up with ",

];

const SchoolGame = ({ setCurrentGame }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');
  const [isPickDisabled, setIsPickDisabled] = useState(false);

  const nextSchool = () => {
   setCurrentQuestionIndex((prev) => (prev + 1) % schoolQuestions.length);
    setCurrentImage('');
    setIsPickDisabled(false);
  };

  const pickSchool = () => {
    if (!isPickDisabled) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(randomImage);
      setIsPickDisabled(true);
    }
  };

  const replaySchool = () => {
    setCurrentImage('');
    setIsPickDisabled(false);
  };

  return (
    <div id="schoolGame" className="game-page">
      <h2 className="question">{schoolQuestions[currentQuestionIndex]}</h2>
      <div id="imageContainer">
        {currentImage ? (
          <img src={currentImage} alt="game" />
        ) : (
          <div className="placeholder">???</div>
        )}
      </div>
      <div className="buttons">
        <button onClick={nextSchool}>Next</button>
        <button onClick={pickSchool} disabled={isPickDisabled}>Pick</button>
        <button onClick={replaySchool}>Replay</button>
        <button onClick={() => setCurrentGame('homePage')}>Back</button>
      </div>
    </div>
  );
};

export default SchoolGame;