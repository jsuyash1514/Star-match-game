import { useState } from 'react';
import './style/App.css';
import { Game } from './Game';

export const App = (props) => { 
  let timeLimit = 10;
  const [buttonText, setButtonText] = useState(`Start Game`);
  const [displayText, setDisplayText] = useState(`You'll be given ${timeLimit} seconds. All the best!`);
  const [isGameActive, setGameActive] = useState(false);
  const handleFinish = (buttonText, displayText) => {
    setButtonText(buttonText);
    setDisplayText(displayText);
    setGameActive(false);
  };
  const display = () => {
    if (isGameActive) return <Game onFinish={handleFinish} timeLimit={timeLimit}/>;
    else return (
      <div>
        <span id="displayText">{displayText}</span>
        <br></br>
        <button id="startGameButton" onClick={() => {
            setGameActive(true);
          }}>{buttonText}</button>
      </div>
    );
  }
  return (
    <div>
    <h1 className="h1">The Star Match Game</h1>
    {display()}
    </div>
    );
  }
  
  export default App;
  