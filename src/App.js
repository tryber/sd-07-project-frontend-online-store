import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import ShoppingCartPage from './Pages/ShoppingCartPage';
import ProductDetails from './Pages/ProductDetails';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/product-details/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route path="/shopping-cart" component={ ShoppingCartPage } />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
