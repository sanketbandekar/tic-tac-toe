import React, {useState} from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helper";
import "./styles/root.scss";

const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);
    const winner = calculateWinner(board);

    const message = winner ? `Winner is ${winner}` : `Next Player ${isNext? 'X' : 'O' }` 

    const handleClickSquare = position => {

        if (board[position] || winner){
            return;
        }

        setBoard( prev => { // prev hold the current value and then using map we update its value;
            // so for first element prev will be always true and returns value X;
            // so setIsNext we use ! operator;
            // map function accepts three arguments (current_element,index,some_array);
            return prev.map((square,pos) => {
                if (pos === position){
                    return isNext ? 'X' : 'O';
                }

                return square;
            });
        });

        setIsNext(prev => !prev);
    };

  return(
    <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board = {board} handleClickSquare={handleClickSquare}/>
    </div>
  );
};

export default App;