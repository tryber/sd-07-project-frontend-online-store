import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/ShoppingCart/Details/:id" component={ ProductDetails } />
          <Route exact path="/ShoppingCart" component={ ShoppingCart } />
          <Route exact path="/" component={ ProductList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
