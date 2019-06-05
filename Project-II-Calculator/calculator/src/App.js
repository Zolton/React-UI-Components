import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="Calculator">
      <div>
        <CalculatorDisplay buttonStyle="display" text="0" />
      </div>
      <div className="clearLine">
        <ActionButton buttonStyle="clearButton" text="clear" />
        <ActionButton buttonStyle="math" text="/" />
      </div>
      <div className="row1">
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton buttonStyle="math" text="x" />
        <div className="row2">
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton buttonStyle="math" text="-" />
        </div>
        <div className="row3">
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton buttonStyle="math" text="+" />
        </div>
      </div>
      <div className="row4">
        <ActionButton buttonStyle="clearButton" text="0" />
        <ActionButton buttonStyle="math" text="=" />
      </div>
    </div>
  );
};

export default App;
