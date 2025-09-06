import React, { useState } from 'react';
import { images } from './images';
import './App.css';

const schoolQuestions = [
  'Who is your classmate?',
  'Who is your crush?',
  'Who is your best friend?',
  'Who is your ex?',
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
          <p>No image selected</p>
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