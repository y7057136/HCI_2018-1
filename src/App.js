import React, { Component } from 'react';
import Popup from "reactjs-popup";
import Demo from "./Demo.js";
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">American Football에 대해 알아보자</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Demo/>
      </div>
    );
  }
}

export default App;
