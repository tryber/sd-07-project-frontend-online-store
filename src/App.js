import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { InitialScreen, Kart } from './components';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InitialScreen } />
          <Route exact path="/kart" component={ Kart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
