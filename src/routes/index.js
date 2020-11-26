import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, ShoppingCart } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/shoppingcart" component={ ShoppingCart } />
    <Route exact path="/" component={ Home } />
  </Switch>
);

export default Routes;
