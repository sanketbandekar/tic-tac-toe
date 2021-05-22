import React from 'react'


const Square = ({value,onClick,isWinning}) => {

    // console.log("Square Render");
    
    return (
        <button 
        type="button" 
        
         onClick={onClick}
         className={`square ${isWinning ? 'winning' : ''} ${value==='X' ? 'text-green' : 'text-orange'}`}
         
         >
             {value}
             
        </button>
    )
}

export default Square
