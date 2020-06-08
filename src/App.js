import './App.css';
import React, { Component } from 'react';
import userIcon from './user.png';
import addUserIcon from './add-user.png';
import lock from './lock.png';
import mail from './mail.jpg';

/**
 * Modal Assignment
 */

class App extends Component {

  state = {
    modalVisible : false
  }
  
  // TODO: Conditional rendering left for main div - Login/Register
  render () {
    return  (
      <div>
         <div class = "modalDiv">
        <button className = "modalButton" onClick = {{}}> LAUNCH MODAL LOGIN/REGISTER </button>
        </div>
         <section>
        <div className = "mainDiv1" >
        <img className = "img"  src= {userIcon} alt="User Icon" />
        <button className = "mainDivButton"> Login </button>
        <img className = "img"  src= {addUserIcon} alt="User Icon" />
        <text className= "register"> Register </text>
        
        </div>
        <div > 
        <div className = "inputDiv">
        <img className = "mailImg" src= {mail} alt="User Icon" />
        <input placeholder = "Your email" />
        </div>
        
        <img className = "lockImg"  src= {lock} alt="User Icon" />
        <input placeholder = "Your password" />

        <div className = "loginInButton"> <button className = "loginIn"> LOG IN </button></div>
        <hr />
        </div>
        <div class = "mailDiv2"> 
        <div className = "signUp">
          <text> Not a member?  </text> 
          <text className = "text" onClick = {{}}> Sign Up </text>
        </div>
        <div className = "forgotPassword">
        <text> Forgot </text> 
        <text className = "text" onClick = {{}}> Password? </text>
        </div>
        <button className = "closeButton">  CLOSE </button>
        </div>
        </section>
         </div>
    )
  }
}

export default App;