import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import AddReview from './components/AddReview';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/" component={ ProductsList } />
        <Route exact path="/product-details" component={ ProductDetails } />
        <Route exact path="/review/:id" component={ AddReview } />
      </BrowserRouter>
    </div>
  );
}

export default App;
