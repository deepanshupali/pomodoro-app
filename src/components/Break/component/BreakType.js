import React, { useEffect, useState } from 'react'
import './breaktype.css'
function BreakType(props) {


  

  function handleClick(){
  props.setType(props.label)

  props.onClick()
  }
 
  const divClass = `${props.isActive ? "active" : "inActive"}`;



  return (
    <span onClick={handleClick} className={divClass}>{props.label}</span>
  )
}

export default BreakType