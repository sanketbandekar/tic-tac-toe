import React, {useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./helper";
import "./styles/root.scss";

const NewGame = [{ board: Array(9).fill(null), isNext: true},];

const App = () => {

  const [history, setHistory] = useState(NewGame);
  const [currentMove, setCurrentMove] = useState(0);

  const current  = history[currentMove];

    const {winner, winningSquares} = calculateWinner(current.board);

    const handleClickSquare = position => {

        if (current.board[position] || winner){
            return;
        }

        setHistory( prev => { 
          
          const last = prev[prev.length - 1];
          // prev hold the current value and then using map we update its value;
            // so for first element prev will be always true and returns value X;
            // so setIsNext we use ! operator;
            // map function accepts three arguments (current_element,index,some_array);
            const newBoard = last.board.map((square,pos) => {
                if (pos === position){
                    return last.isNext ? 'X' : 'O';
                }

                return square;
            });
            return prev.concat({board: newBoard, isNext: !last.isNext});
        });

        setCurrentMove(prev => prev + 1);
    };

    const moveTo = (move) =>{
      setCurrentMove(move);
    }

    const onNewGame =() => {
      setHistory(NewGame)
      setCurrentMove(0);
    }

  return(
    <div className="app">
    <h1>TIC TAC TOE</h1>
    <StatusMessage winner={winner} current={current}/>
    <Board board = {current.board} handleClickSquare={handleClickSquare} winningSquares={winningSquares}/>
    <button type = "button" onClick={onNewGame}>
      Start New Game
    </button>
    <History history = {history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
};

export default App;