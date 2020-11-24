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
          <Route exact path="/" component={ Products } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
