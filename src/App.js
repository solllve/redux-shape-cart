import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from "react-redux"
import CromPraisingComponent from './components/Crom'
import ShapeItem from './components/Item'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShapeItem />
        <CromPraisingComponent />
      </div>
    );
  }
}

export default App;
