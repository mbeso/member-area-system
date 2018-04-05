import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/component/header';
import Member from './members/components/member';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <div className="container">
        <Member />
      </div>
      </div>
    );
  }
}

export default App;
