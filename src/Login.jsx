import  React from 'react'
import './Login.css'

function Login(props) {
  return ( props.trigger) ? (
    <div className='login-pop'>
      <div className="login-popup">
        <button className='close-page' onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Login
