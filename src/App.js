import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Search } />
      </Switch>
    </div>
  );
}

export default App;
