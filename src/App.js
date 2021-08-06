import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import Multiplication from './components/Multiplication';
import Division from './components/Division';

 
function App() {
  return (
    <div className="App">
      <Router >
        <Navbar></Navbar>
        <Route path='/' exact component={Home}></Route>
        <Route path='/claculator/home' exact component={Home}></Route>
        <Route path='/claculator' exact component={Home}}></Route>
        <Route path='/claculator/add' exact component={Addition}></Route>
        <Route path='/claculator/subtract' exact component={Subtraction}></Route>
        <Route path='/claculator/multiply' exact component={Multiplication}></Route>
        <Route path='/claculator/divide' exact component={Division}></Route>
      </Router>
    </div>
  );
}

export default App;
