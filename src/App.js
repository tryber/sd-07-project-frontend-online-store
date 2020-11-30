import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import ProductNotFound from './pages/ProductNotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/pages/ProductNotFound" component={ ProductNotFound } />
          <Route path="/pages/ShoppingCart" component={ ShoppingCart } />
          <Route path="/pages/ProductDetails/:id" component={ ProductDetails } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
