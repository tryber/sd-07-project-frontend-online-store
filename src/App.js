import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Home,
  ShoppingCart,
  ProductDetails,
  ProductNotFound,
  CheckoutPage
}  from './pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/pages/ShoppingCart" component={ ShoppingCart } />
          <Route path="/pages/CheckoutPage" component={ CheckoutPage } />
          <Route path="/pages/ProductDetails/:id" component={ ProductDetails } />
          <Route exact path="/" component={ Home } />
          <Route path="*" component={ ProductNotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
