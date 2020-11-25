import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './pages/Products';
import Header from './components/Header';
import ShoppingCart from './pages/shopping-cart';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ Products } />
          <Route exact path="/pages/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
