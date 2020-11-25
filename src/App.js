import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Home from './components/Home';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div>
      <Home />
      <BrowserRouter>
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <Route exact path="/" component={ ProductList } />
        <Route exact path="/product-details" component={ ProductDetails } />
      </BrowserRouter>
    </div>
  );
}

export default App;
