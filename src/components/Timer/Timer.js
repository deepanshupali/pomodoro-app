import React, { useEffect, useState } from "react";
import "./timer.css";
function Timer(props) {
  const [intervalId, setIntervalId] = useState(null);
  const [secId, setId] = useState(null);
  const [time, setTime] = useState(0);
  const [sec, setSec] = useState(59);
  const [displayTime, setDisplayTime] = useState("00:00");
  const [startLabel,setStartLabel] = useState('start')
 

  useEffect(() => {
    if (props.bType === "pomodoro") {
      setTime(props.pomodoro);
    } else if (props.bType === "shortBreak") {
      setTime(props.shortBreak);
    } else {
      setTime(props.longBreak);
    }
    return () => clearInterval(intervalId);
  }, [props.pomodoro,props.shortBreak,props.longBreak]);

  function formatTime(minutes,sec) {
    const min = Math.floor(minutes);

    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  }

  function startTimer() {
    //pause if clicked
    if (intervalId !== null && secId !== null) {
      setStartLabel('START')
      clearInterval(intervalId);
      clearInterval(secId);
      setIntervalId(null);
    } else {
      setStartLabel('RESUME')
      setTime(s => s-1)
      setId(
        setInterval(() => {
          console.log(sec);
          setSec((s) => {
            console.log(s)
            if (s <= 0) {
              setSec(59);
            } 
            return s - 1
          });
          
        }, 1000)
      );

      setIntervalId(
        setInterval(() => {
          setTime((prevTime) => {
            const newTime = prevTime - 1;
            if (newTime === 0) {
              clearInterval(intervalId);
            }
            return newTime;
          });
        }, 60000)
      );
    }
  }

  useEffect(() => {

    console.log(props.bType)
    setSec(0)
    clearInterval(secId)
    if (props.bType === "pomodoro") {
      setTime(props.pomodoro);
      console.log(time);
    } else if (props.bType === "shortBreak") {
      setTime(props.shortBreak);
    } else if (props.bType === "longBreak") {
      setTime(props.longBreak);
    }

    if (intervalId !== null) {

      clearInterval(intervalId);
    }
    setStartLabel('start')
  }, [props.bType]);

  useEffect(() => {
    setDisplayTime(formatTime(time, sec));
  }, [time, sec]);

  return (
    <div className="outer-circle">
      <div className="inner-circle">
        <h1 className="time">{displayTime}</h1>

        <span onClick={startTimer} className="start-btn">
        {startLabel}
        </span>
      </div>
    </div>
  );
}

export default Timer;
