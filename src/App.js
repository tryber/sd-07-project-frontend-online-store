import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <input type="text" data-testid="home-initial-message" />
          <h2>Digite algum termo de pesquisa ou escolha uma categoria.</h2>
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            Carrinho de compras
          </Link>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
