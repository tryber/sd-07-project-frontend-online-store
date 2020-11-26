import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeBeforeSearch from './pages/HomeBeforeSearch';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="app-div">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomeBeforeSearch } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
