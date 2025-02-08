import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };
  const handleEqual = () => {
    try {
      if (/[\+\-\*\/]$/.test(input)) {
        setInput('Error');
      }else{
        setResult(eval(input).toString()); //eval used to caculate input
      }
      
    } catch (error) {
      setResult(error);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      {result && <h1 style={{ color: "" }}>Result: {result}</h1>}
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={() => handleButtonClick(7)}>7</button>
          <button onClick={() => handleButtonClick(8)}>8</button>
          <button onClick={() => handleButtonClick(9)}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={() => handleButtonClick(4)}>4</button>
          <button onClick={() => handleButtonClick(5)}>5</button>
          <button onClick={() => handleButtonClick(6)}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={() => handleButtonClick(1)}>1</button>
          <button onClick={() => handleButtonClick(2)}>2</button>
          <button onClick={() => handleButtonClick(3)}>3</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={() => handleButtonClick(0)}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleEqual}>=</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
};

export default App;
