import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Counter count={5} />
      </div>
    );
  }
}
