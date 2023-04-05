import React, { useEffect, useState } from 'react'
import Input from './Input/input'
import Theme from './Theme/Theme'
import './setting.css'
function Setting(props) {
//state to store data from three inputs on change
const [pomodoro,setPomodoro] = useState()
const [shortBreak,setShortBreak] = useState()
const [longBreak,setLongBreak] = useState()
//changing state and getting value and label from input component it runs on every input change


function handleCancel() {
  if (props.onClose) {
    props.onClose();
  }
}

//passing object as this because we cant pass directly
function handleClick() {

  if (pomodoro !== undefined) {
    props.updateTime('pomodoro', pomodoro);
  }
  if (shortBreak !== undefined) {
    props.updateTime('shortBreak', shortBreak);
  }
  if (longBreak !== undefined) {
    props.updateTime('longBreak', longBreak);
  }
}
//making input components as they are same
const type = ['pomodoro','short break','long break']
const input = type.map((e,index)=>{
  return <Input pomodoro = {setPomodoro} shortBreak={setShortBreak} longBreak = {setLongBreak} key={index} label = {e} />
})


  return (
    <div className='set-container'>
        <div className='header'>
          <h3>Settings</h3>
          <button onClick={handleCancel} className='close-btn'>close</button>
        </div>
        <div className='time-input'>
          <h4>TIME (M I N U T E S)</h4>
          <div className='input-container'>
          {input}
          </div>
        </div>
     <button onClick={handleClick} className='apply'>APPLY</button>
    </div>
  )
}

export default Setting