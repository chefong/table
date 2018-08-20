import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// import components
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
