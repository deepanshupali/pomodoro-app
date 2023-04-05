import React, { useState } from "react";
import "./input.css";
function Input(props) {


  function handleChange(e) {
    
    if (props.label === 'pomodoro') props.pomodoro(e.target.value)
    else if (props.label === 'short break') props.shortBreak(e.target.value)
    else props.longBreak(e.target.value)

  }
  
  return (
    <div>
      <span className="label">{props.label}</span>
      <div className="input-wrapper">
        <input onChange={handleChange} className="input" type="number"></input>
      </div>
    </div>
  );
}

export default Input;
