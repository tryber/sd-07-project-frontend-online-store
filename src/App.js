import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeInitial from './components/HomeInitial';
// import * as api from '../services/api';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomeInitial } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
