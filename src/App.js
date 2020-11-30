import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductsList } />
          <Route exact path="/ShoppingCart" component={ ShoppingCart } />
          <Route exact path="/Checkout" component={ Checkout } />
          <Route
            exact
            path="/ProductDetail/:id"
            render={ (props) => <ProductDetail { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
