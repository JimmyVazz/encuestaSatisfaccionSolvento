import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Acreeditado from './components/Acreeditados/Acreeditados'
import RH from './components/RH/RH'

class App extends Component{
  render(){
    return (
      <div className="App">
          <Navbar />
      </div>
    );
  }
}

export default App;

