import React, {useState} from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helper";
import "./styles/root.scss";

const App = () => {

  const [history, setHistory] = useState([{ board: Array(9).fill(null), isNext: true},]);
  const [currentMove, setCurrentMove] = useState(0);

  const current  = history[currentMove];

  console.log('history:', history);

    const winner = calculateWinner(current.board);

    const message = winner ? `Winner is ${winner}` : `Next Player ${current.isNext? 'X' : 'O' }` 

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

  return(
    <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board = {current.board} handleClickSquare={handleClickSquare}/>
    </div>
  );
};

export default App;