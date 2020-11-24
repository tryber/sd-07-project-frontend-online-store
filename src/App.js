import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { InitialScreen } from './components';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InitialScreen } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
