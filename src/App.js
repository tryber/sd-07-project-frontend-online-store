import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeBeforeSearch from './pages/HomeBeforeSearch';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';

function App() {
  return (
    <div className="app-div">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomeBeforeSearch } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route path="/Product" component={ Product } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
