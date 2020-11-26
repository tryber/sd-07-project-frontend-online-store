import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Products } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
