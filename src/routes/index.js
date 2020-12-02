import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, ShoppingCart, ProductDetail, Checkout } from '../pages';

const Routes = () => (
  <Switch>
    <Route
      path="/checkout"
      render={ (props) => <Checkout { ...props } /> }
    />
    <Route
      path="/productdetail"
      render={ (props) => <ProductDetail { ...props } /> }
    />
    <Route
      path="/shoppingcart"
      render={ (props) => <ShoppingCart { ...props } /> }
    />
    <Route
      exact
      path="/"
      render={ (props) => <Home { ...props } /> }
    />
  </Switch>
);

export default Routes;
