import React, { useState } from 'react'
import './loginsignup.css'
import usericon from '../assets/person.png'
import emailic from '../assets/email.png'
import pass from '../assets/password.png'

export const LoginSignup = () => {

    const [action,setAction]=useState("Sign Up"); //it gives us the action to 

  return (
    <div className='container'>
        
        <div className="header">
            <div className="text">
              {action}
            </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">   <img src={usericon} alt="" /> <input type="text" placeholder='e.g. John Doe'/>  </div>}
                
                <div className="input">
                    <img src={emailic} alt="" />
                    <input type="email" placeholder='abc@example.com'/>
                </div>
                <div className="input">
                    <img src={pass} alt="" />
                    <input type="password" placeholder='should be alphaNumeric'/>
                </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-pass">Lost password? <span>Click Here</span></div>}
        
        <div className="submit-cont">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction('Sign Up')}>
                Sign Up
            </div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>
               Login 
            </div>
        </div> 
    </div>
  )
}
export default LoginSignup
