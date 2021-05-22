import React from 'react'


const Square = ({value,onClick}) => {

    // console.log("Square Render");
    
    return (
        <button 
        type="button" 
        className="square"
         onClick={onClick}
         >
             {value}
             
        </button>
    )
}

export default Square
