import React from 'react'

const StatusMessage = ({winner,current}) => {
    // const message = winner ? `Winner is ${winner}` : `Next Player ${current.isNext? 'X' : 'O' }`

    const noMovesLeft = current.board.every((el)=> el !== null);
    return (
        <div className="status-message">
           {/* {winner && `Winner is ${winner}` } */
           winner && (<>
           Winner is {' '} 
           <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span>
           </>
           )}
           {!winner && !noMovesLeft && 
           <>
           Next Player <span className={current.isNext?'text-green' : 'text-orange'}>{current.isNext? 'X' : 'O' }
           {' '}
           </span>
           </>
           }
           {!winner && noMovesLeft && 
           <>
           <span className="text-green">X</span> and
           <span className="text-orange"> O</span> tied
           </>}
        </div>
    )
}

export default StatusMessage
