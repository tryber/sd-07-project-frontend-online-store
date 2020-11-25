import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import Listagem from './components/listagem';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Listagem } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
