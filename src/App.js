import {Route} from 'react-router-dom';
import React, {Component} from 'react';
import OnePage from './pages/OnePage';
import './App.css';
import {HashRoute} from 'react-router-dom';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App" style={{width: '100vw', height: '100vh'}}>
        <Route path="/" component={OnePage} />
      </div>
    );
  }
}

export default App;
