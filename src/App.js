import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/shoppingCart';
import ProductDetail from './pages/productDetail';
import Home from './pages/home';
import Checkout from './pages/checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingCart" component={ ShoppingCart } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/productDetail/:id" component={ ProductDetail } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
