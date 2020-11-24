import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeInitial from './Pages/HomeInitial';
import ShoppingCart from './Pages/ShoppingCart'
// import * as api from '../services/api';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeInitial}/>
        <Route path="/shopping-cart" component={ShoppingCart} />
      </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
