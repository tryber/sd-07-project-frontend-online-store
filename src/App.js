import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ ProductsList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
