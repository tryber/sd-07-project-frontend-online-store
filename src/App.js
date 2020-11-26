import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ProductList } />
      <Route path="/cart" component={ ShoppingCart } />
      <Route path="/product/:id" component={ ProductDetails } />
    </BrowserRouter>
  );
}

export default App;
