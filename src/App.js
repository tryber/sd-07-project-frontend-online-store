import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import NotFound from './components/NotFoud';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ SearchBar } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
