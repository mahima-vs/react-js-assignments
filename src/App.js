import './App.css';
import Button from './button/Button';
import React, { Component } from 'react';


/**
 * Calculator App
 */
const style = {
  flex: 1,
  color: 'white',
  outline: '1px solid  rgb(86, 86, 89)',
  borderWidth: '0px'
}

class App extends Component {

  state = {value : 0};

  render(){
    return (
      <section>
        <div className = "inputDiv"> 
        <input type = "text" value = {this.state.value} />
        </div>
        <div className = "div1">
        <Button buttonName = "AC" style = {style}/>
        <Button buttonName = "+/-"  style = {style} />
        <Button buttonName = "%"  style = {style}/>
        <Button buttonName = "/"  style = {style} />
        </div>
         <div className = "div1">
        <Button buttonName = "7"  style = {style}/>
        <Button buttonName = "8"  style = {style}/>
        <Button buttonName = "9"  style = {style}/>
        <Button buttonName = "*"  style = {style}/>
        </div>
        <div className = "div1">
        <Button buttonName = "4"  style = {style}/>
        <Button buttonName = "5"  style = {style}/>
        <Button buttonName = "6"  style = {style}/>
        <Button buttonName = "-"  style = {style}/>
        </div>
        <div className = "div1">
        <Button buttonName = "1"  style = {style}/>
        <Button buttonName = "2"  style = {style}/>
        <Button buttonName = "3"  style = {style}/>
        <Button buttonName = "+"  style = {style}/>
        </div>
        <div className = "div1">
        <Button buttonName = "0" style = {{ width: '50%', color: 'white', borderWidth: '0px'}}/>
        <Button buttonName = "."  style = {style}/>
        <Button buttonName = "="  style = {style}/>
        </div>
      </section>
    )
  }
}

export default App;
