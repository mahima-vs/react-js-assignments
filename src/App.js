import './App.css';
import Button from './button/Button';
import InputLabel from './inputLabelController/InputLabel';
import React from 'react';

const data = [{
  name: 'Name',
  id: '123'
},
{
  name: 'Password',
  id: '456'
}]

const buttonData = [{
  name: 'Reset',
  id: '789'
},
{
  name: 'Submit',
  id: '111'
}]

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nameValue: '',
      passwordValue: '',
      value: ''
    }
    this.onChangeText = this.onChangeText.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  // Triggered on press of a button
  onButtonClick() {
    this.setState((state) => ({
      value: state.nameValue
    }));
  }

  // Triggered when there is a change in input element
  onChangeText(event, inputName) {
    inputName === 'Name' ? this.setState({ nameValue: event.target.value }) : this.setState({ passwordValue: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <label> Login </label>
        {data.map(({name, id}) => {
          return (
            <InputLabel labelName={name} inputName={name} key={id} onChange={(event) => this.onChangeText(event, name)} />
          )
        })}
        {buttonData.map(({name, id}) => {
          return (<Button buttonName={name} key={id} onClick={this.onButtonClick} />)
        })
        }
        <div>
          <label> {this.state.value} </label>
        </div>
      </div>
    )
  }
}

export default App;
