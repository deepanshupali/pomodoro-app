import React from 'react'
import './theme.css'

function Theme(props) {

  return (
    <div className='theme-container'>
        <h3>{props.label}</h3>
        <div className='fonts-container'>
        <button className='kumbhSans {}'>Aa</button>
        <button className='robotoSlab btn-2'>Aa</button>
        <button className='spaceMono btn-3'>Aa</button>
        </div>  
    </div>
  )
}

export default Theme