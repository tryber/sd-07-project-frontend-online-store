import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import PurchaseSummary from './pages/PurchaseSummary';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route
            path="/product_details/:category_id/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route path="/purchasesummary" component={ PurchaseSummary } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
