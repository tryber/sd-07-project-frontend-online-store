import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeInitial from './Pages/HomeInitial';
import ProductDetails from './Pages/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart';
// import * as api from '../services/api';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomeInitial } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/product" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
