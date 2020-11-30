import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Payment from './pages/Payment';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/payment" component={ Payment } />
          <Route path="/product-details" component={ ProductDetails } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Products } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
