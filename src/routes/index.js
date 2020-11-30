import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, ShoppingCart, ProductDetail, Checkout } from '../pages';

const Routes = () => (
  <Switch>
    <Route path="/checkout" component={ Checkout } />
    <Route path="/productdetail" component={ ProductDetail } />
    <Route path="/shoppingcart" component={ ShoppingCart } />
    <Route exact path="/" component={ Home } />
  </Switch>
);

export default Routes;
