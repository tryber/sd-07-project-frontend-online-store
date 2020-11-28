import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/pages/ShoppingCart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
          <Route path="/pages/ProductDetails/:id" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
