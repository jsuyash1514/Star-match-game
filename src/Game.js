import { useEffect, useState } from "react";
import './Game.css';
import { Board } from "./Board";
import { Timer } from "./Timer";

export const Game = (props) => {        
    let possibilities = new Set();

  //Define state
  const [availableDigits, setAvailableDigits] = useState(new Set());
  const [unavailableDigits, setUnavailabeDigits] = useState(new Set());
  const [currentChance, setCurrentChance] = useState(0);

  // one time initialisations
  useEffect(() => {
      for(let i = 0; i<9; i++) {
        availableDigits.add(i+1);
     }
     startGame();
  },[]);

  // Handle next chance after a match is found
  useEffect(() => {
    startGame();
  },[unavailableDigits]);

  //game logic
  const startGame = () => {
    calculatePossibilites();
    if (possibilities.size === 0) {
        props.onFinish(`Play again`, `Well done! You won this round.`);
    } else {
        const digit = getRandomItem();
        playChance(digit);
    }
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
    setCurrentChance(digit)
  }

  const handleMatch = (candidates) => {
    let items = Array.from(candidates);
    console.log(items);
    let temp = new Set(unavailableDigits);
    items.map(item => {
      availableDigits.delete(item);
      temp.add(item);
    });
    setUnavailabeDigits(temp);
  }

  const handleTimeout = () => {
    props.onFinish(`Try again`, `Timeout! Better luck next time.`)
  }

  return (
    <div>
        <span className="layoutText">Pick one or more number that sum to the number of stars.</span>
        <Board requiredSum={currentChance} unavailableDigits={unavailableDigits} onMatch={handleMatch}/>
        <Timer timeLimit={props.timeLimit} onTimeout={handleTimeout}/>
    </div>
    );
}

