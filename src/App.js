import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';


import './App.css';

function App() {
  return (
    <div className="App">
      <CategoryList />
      <BrowserRouter>
        <Switch>
          <Route path="/product-details" component={ ProductDetails } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Products } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
