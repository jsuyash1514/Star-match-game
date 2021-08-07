import './App.css';
import { Game } from './Game';

export const App = (props) => { 
  
  return (
    <div>
    <h1 className="h1">The Star Match Game</h1>
    <span className="layoutText">Pick one or more number that sum to the number of stars.</span>
    <Game/>
    </div>
    );
  }
  
  export default App;
  