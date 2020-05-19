import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label> Login </label>
      <div className="Name">
        <label>
          Name
      </label>
        <input type="text" placeholder="Name" class="Input" />
      </div>

      <div className="Password">
        <label>
          Password
      </label>
        <input type="text" placeholder="Password" class="Input2" />
      </div>

      <div className="Button" >
        <button onClick={() => console.log("Reset pressed")}>
          Reset
      </button >
        <button className="Button2" onClick={() => console.log("Submit pressed")}>
          Submit
      </button>
      </div>

    </div>
  );
}

export default App;
