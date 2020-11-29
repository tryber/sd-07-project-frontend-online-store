import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import CardDetails from './pages/CardDetails';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/shopping-cart" exact component={ ShoppingCart } />
          <Route
            path="/shopping-cart/:category/:query/:id"
            exact
            render={ (props) => <ShoppingCart { ...props } /> }
          />
          <Route
            path="/product-detail/:category/:query/:id"
            exact
            render={ (props) => <CardDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
