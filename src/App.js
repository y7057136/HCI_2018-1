import React, { Component } from 'react';
import Offense from "./Offense.js";
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">American Football에 대해 알아보자</h1>
        </header>
        <p className="App-intro">
          <br/>
        </p>
        <Offense/>
      </div>
    );
  }
}

export default App;
