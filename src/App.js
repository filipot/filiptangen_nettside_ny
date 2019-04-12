import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import OnePage from './pages/OnePage'
import './App.css';
import { HashRoute } from 'react-router-dom'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel);


class App extends Component {
    componentDidMount() {
    }

    render() {

    return (
        <div className="App" style={{width:"100vw",height:"100vh"}}>


                <Route path="/" component={OnePage}/>

        </div>
    );
  }
}


export default App;