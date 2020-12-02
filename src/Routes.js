import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Productdetail from './Components/ProductDetails';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route
            path="/productdetail/:id"
            render={ (props) => <Productdetail { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
