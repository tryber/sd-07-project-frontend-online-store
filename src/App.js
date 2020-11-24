import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage.js';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/shoppingcart" component={ShoppingCart} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
