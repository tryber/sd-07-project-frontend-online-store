import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShearchPage from './Pages/ShearchPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ShearchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
