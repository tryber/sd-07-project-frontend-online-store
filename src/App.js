import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import './App.css';
import ShoppingCart from './components/ShoppingCart';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/" component={ ProductsList } />
      </BrowserRouter>
    </div>
  );
}

export default App;
