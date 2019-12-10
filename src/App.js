import React from 'react';
import './App.css';
import {Employee, Main} from './Employee.js';

function App() {
  let time = (new Date()).toUTCString()+'-6';
  console.log("start:",time);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Main/>


      {/* <Employee
        name="Bob"
        date={time}
      /> */}
    </div>
  );
}

export default App;
