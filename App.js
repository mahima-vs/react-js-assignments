import React, { Component } from 'react';
import Button from "./src/button/Button";
import './App.css';

/**
 * Calculator App
 */
  class App extends Component {

    state = {value : 0};

    render(){
      return (
        <section>
          <input type = "text" value = {this.state.value}> </input>
          <div>
          <Button buttonName = "AC"/>
          <Button buttonName = "+/-"/>
          <Button buttonName = "%"/>
          <Button buttonName = "/"/>
          </div>
        
        </section>
      )
    }
}

export default App;
