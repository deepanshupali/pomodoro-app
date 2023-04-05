import React, { useState } from 'react'
import BreakType from './component/BreakType'

function Break(props) {

 
  const types = ['pomodoro','shortBreak','longBreak']

  const [activeType, setActiveType] = useState(types[0]);


  //makes 3 components with label of each element in array
  const breakType = types.map((type,index)=>(
    <BreakType
      onClick = {()=>setActiveType(type)}
      isActive = {type === activeType}
      key={index} 
      setType = {props.setType} 
      label= {type}
      />
  ))

  return (
    <>
     <form className='form'>
        {breakType}
    </form>
    </>
  )
}

export default Break