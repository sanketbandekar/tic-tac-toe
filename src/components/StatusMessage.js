import React from 'react'

const StatusMessage = ({winner,current}) => {
    // const message = winner ? `Winner is ${winner}` : `Next Player ${current.isNext? 'X' : 'O' }`

    const noMovesLeft = current.board.every((el)=> el !== null);
    return (
        <h2>
           {winner && `Winner is ${winner}` }
           {!winner && !noMovesLeft && `Next Player ${current.isNext? 'X' : 'O' }`}
           {!winner && noMovesLeft && 'DRAW'}
        </h2>
    )
}

export default StatusMessage
