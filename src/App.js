import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/Body';
import Areas from './components/Areas';

class App extends Component {
  render() {
    return (
      <div className="App">
      
       <Header></Header>
       <Body></Body>
       <Areas></Areas>
         
    </div>

    );
  }
}

export default App;
