import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/home" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
