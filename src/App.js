import React, { useState } from 'react';
import SchoolGame from './SchoolGame';
import PartyGame from './PartyGame';
import NeighborhoodGame from './NeighborhoodGame';
import GuessIdol from './GuessIdol';
import './App.css';


const App = () => {
  const [currentGame, setCurrentGame] = useState('homePage');

  return (
    <div className="app-container">
      <div id="homePage" className={currentGame === 'homePage' ? '' : 'hidden'}>
        <h1>KPOP GAME</h1>
        <div className="cards-container">
          <div className="card school-card">
            <div className="card-content">
              <h3>School</h3>
              <button onClick={() => setCurrentGame('schoolGame')}>Play</button>
            </div>
          </div>
          <div className="card party-card">
            <div className="card-content">
              <h3>Party</h3>
              <button onClick={() => setCurrentGame('partyGame')}>Play</button>
            </div>
          </div>
          <div className="card neighborhood-card">
            <div className="card-content">
              <h3>Neighborhood</h3>
              <button onClick={() => setCurrentGame('neighborhoodGame')}>Play</button>
            </div>
          </div>

          <div className="card idol-card">
            <div className="card-content">
              <h3>gusse the idol gsme </h3>
              <button onClick={() => setCurrentGame('GuessIdol')}>Play</button>
            </div>
          </div>
        </div>
      </div>
      <div className={currentGame === 'schoolGame' ? '' : 'hidden'}>
        <SchoolGame setCurrentGame={setCurrentGame} />
      </div>
      <div className={currentGame === 'partyGame' ? '' : 'hidden'}>
        <PartyGame setCurrentGame={setCurrentGame} />
      </div>
      <div className={currentGame === 'neighborhoodGame' ? '' : 'hidden'}>
        <NeighborhoodGame setCurrentGame={setCurrentGame} />
      </div>
       <div className= {currentGame === 'GuessIdol' ? '' :'hidden'}>
      <GuessIdol  setCurrentGame ={setCurrentGame} />
    </div>
    </div>
  );
};

export default App;
