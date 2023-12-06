import React from 'react'
import './Join.css'

function Join(props) {
  return ( props.trigger) ? (
    <div className='login-pop'>
      <div className="login-popup">
        <button className='close-page' onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Join
