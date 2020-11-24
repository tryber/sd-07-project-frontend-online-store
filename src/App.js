import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route
          exact
          path="/pages/shoppingcart"
          component={ ShoppingCart }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
