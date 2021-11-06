import React, { Component } from 'react';

import './App.css';

import NavBar from "./components/NavBar";
import Payment from './pages/Payment'


class App extends Component {
  render(){
    return (
        <div className="App">        
          <NavBar Title = "Payment" />
          <Payment />
        </div>
    );
  }
}

export default App;