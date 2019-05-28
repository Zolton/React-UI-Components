import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        
        <button className={props.buttonStyle}>{props.text}</button>
    //     <div><div>
          
    //       <button>0</button>
          
    //     </div>
    //   </div>
    )
}

export default CalculatorDisplay