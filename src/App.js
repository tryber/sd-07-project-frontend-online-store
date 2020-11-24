import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ProductList } />
      <Route path="/cart" component={ ShoppingCart } />
    </BrowserRouter>
  );
}

export default App;
