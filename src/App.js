import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ ShoppingCart } />
          <Route
            exact
            path="/details/:id/category/:category"
            render={ (props) => <ProductDetail { ...props } /> }
          />
          <Route exact path="/cart/checkout" component={ Checkout } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
