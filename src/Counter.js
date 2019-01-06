import React, { Component } from 'react';
import App from './App.js'

export default class Counter extends Component {
  render () {
    return <button>{this.props.count}</button>;
  }
}
