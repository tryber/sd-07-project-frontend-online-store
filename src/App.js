import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/carrinho" component={ ShoppingCart } />
        <Route path="/product" component={ ProductDetails } />
        <Route exact path="/" component={ ProductList } />
      </Switch>
    </Router>
  );
}

export default App;
