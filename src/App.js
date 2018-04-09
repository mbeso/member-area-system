import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './header/component/header';
import Footer from './footer/component/footer';
import Member from './members/components/member';
import Payments from './payments/components/payment';
import Home from './home/components/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/members" component={Member}/>
            <Route path="/payments" component={Payments}/>
        </div>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
