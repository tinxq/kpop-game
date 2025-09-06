import React, { useState } from 'react';
import SchoolGame from './SchoolGame';
import PartyGame from './PartyGame';
import CollegeGame from './CollegeGame';
import './App.css';

const App = () => {
  const [currentGame, setCurrentGame] = useState('homePage');

  return (
    <div>
      <div id="homePage" className={currentGame === 'homePage' ? '' : 'hidden'}>
        <h1>KPOP GAME </h1>
        <div className="cards-container">
          <div className="card">
            <p>School</p>
            <button onClick={() => setCurrentGame('schoolGame')}>Play</button>
          </div>
          <div className="card">
            <p>Party </p>
            <button onClick={() => setCurrentGame('partyGame')}>Play</button>
          </div>
          <div className="card">
            <p>College </p>
            <button onClick={() => setCurrentGame('collegeGame')}>Play</button>
          </div>
        </div>
      </div>
      <div className={currentGame === 'schoolGame' ? '' : 'hidden'}>
        <SchoolGame setCurrentGame={setCurrentGame} />
      </div>
      <div className={currentGame === 'partyGame' ? '' : 'hidden'}>
        <PartyGame setCurrentGame={setCurrentGame} />
      </div>
      <div className={currentGame === 'collegeGame' ? '' : 'hidden'}>
        <CollegeGame setCurrentGame={setCurrentGame} />
      </div>
    </div>
  );
};

export default App;