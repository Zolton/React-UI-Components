import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    
      <button className={props.buttonStyle}>{props.text}</button>
    //   <div><div>
    //     <button>clear</button>
    //     <button>0</button>
        
    //   </div>
    // </div>
  );
};

export default ActionButton;
