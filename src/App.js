import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import FrontPage from './pages/FrontPage'
import Kunnskap from './pages/Kunnskap'
import Erfaring from './pages/Erfaring'
import Personlighet from './pages/Personlighet'
import Ekstra from './pages/Ekstra'
import PageShell from './pages/PageShell'
import './App.css';
import { HashRoute } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div className="App" >
            <Route path="/" exact component={FrontPage}></Route>
            <Route path="/kunnskap" exact component={Kunnskap}></Route>
            <Route path="/erfaring" exact component={Erfaring}></Route>
            <Route path="/personlighet" exact component={Personlighet}></Route>
            <Route path="/ekstra" exact component={Ekstra}></Route>

        </div>
    );
  }
}
/*
<!--
            <HashRoute path="/" exact component={FrontPage}></HashRoute>
            <HashRoute path="/thanks" exact component={Kunnskap}></HashRoute>-->
*/

export default App;
