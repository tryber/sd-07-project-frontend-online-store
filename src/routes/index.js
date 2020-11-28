import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Cart, Checkout, Details, Home, NotFound } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/cart" component={ Cart } />
    <Route path="/checkout" component={ Checkout } />
    <Route path="/details/:id" component={ Details } />
    <Route component={ NotFound } />
  </Switch>
);

export default Routes;
