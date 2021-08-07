import React, { useEffect, useState } from 'react';
import './App.css';
import { Game } from './Game';

export const App = (props) => { 
  let availableDigits = new Set();
  let possibilities = new Set();
  const [currentChance, setCurrentChance] = useState(0);
  useEffect(() => {
      for(let i = 0; i<9; i++) {
        availableDigits.add(i+1);
     }
     startGame();
  },[]);
  const startGame = () => {
    calculatePossibilites();
    console.log(possibilities);
    const digit = getRandomItem();
    console.log(digit);
    playChance(digit);
  }
  const calculatePossibilites = () => {
    possibilities.clear();
    if(availableDigits.size === 0) return;
    let it = availableDigits.values();
    for (let i = 0; i<availableDigits.size; i++) {
      if (possibilities.size === 0) {
        possibilities.add(it.next().value);
      } else {
        let tmp1 = it.next().value;
        let jt = possibilities.values();
        for (let j = 0; j<possibilities.size; j++) {
          let tmp2 = jt.next().value;
          let sum = tmp1 + tmp2;
          if (sum>=1 && sum<=9){
            possibilities.add(sum);
          }
        }
        possibilities.add(tmp1);
      }
    }
  }
  const getRandomItem = () => {
    let items = Array.from(possibilities);
    return items[Math.floor(Math.random() * items.length)]; 
  }
  const playChance = (digit) => {
    console.log('in play chance: ' + digit);
    setCurrentChance(digit)
  }
  return (
    <div>
    <h1 className="h1">The Star Match Game</h1>
    <span className="layoutText">Pick one or more number that sum to the number of stars.</span>
    <Game currentDigit={currentChance}/>
    </div>
    );
  }
  
  export default App;
  