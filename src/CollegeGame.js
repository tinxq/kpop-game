import React, { useState } from 'react';
import { images } from './images';
import './App.css';

const collegeQuestions = [
  'Who is your study partner?',
  'Who is always late to class?',
  "Who is the professor's favorite?",
  'Who throws the best college parties?',
];

const CollegeGame = ({ setCurrentGame }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');
  const [isPickDisabled, setIsPickDisabled] = useState(false);

  const nextCollege = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % collegeQuestions.length);
    setCurrentImage('');
    setIsPickDisabled(false);
  };

  const pickCollege = () => {
    if (!isPickDisabled) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(randomImage);
      setIsPickDisabled(true);
    }
  };

  const replayCollege = () => {
    setCurrentImage('');
    setIsPickDisabled(false);
  }; 

  return (
    <div id="collegeGame" className="game-page">
      <h2 className="question">{collegeQuestions[currentQuestionIndex]}</h2>
      <div id="imageContainer">
        {currentImage ? (
          <img src={currentImage} alt="game" />
        ) : (
          <p>No image selected</p>
        )}
      </div>
      <div className="buttons">
        <button onClick={nextCollege}>Next</button>
        <button onClick={pickCollege} disabled={isPickDisabled}>Pick</button>
        <button onClick={replayCollege}>Replay</button>
        <button onClick={() => setCurrentGame('homePage')}>Back to Home</button>
      </div>
    </div>
  );
};

export default CollegeGame;