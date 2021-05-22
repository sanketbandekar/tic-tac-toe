import React from 'react'


const Square = ({value,onClick,isWinning}) => {

    // console.log("Square Render");
    
    return (
        <button 
        type="button" 
        className="square"
         onClick={onClick}
         style={{
             fontWeight: isWinning ? 'bold' : 'normal'
         }}
         >
             {value}
             
        </button>
    )
}

export default Square
