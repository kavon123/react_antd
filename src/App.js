import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './router';




export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers />
      </div>
      // document.getElementById('root')
    )
  }
}




