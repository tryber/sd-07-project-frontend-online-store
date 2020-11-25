import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Home from './components/Home';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <div>
      <Home />
      <BrowserRouter>
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/" component={ ProductList } />
      </BrowserRouter>
    </div>
  );
}

export default App;
