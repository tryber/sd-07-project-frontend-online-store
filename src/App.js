import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ ShoppingCart } />
          <Route exact path="/cart/checkout" component={ Checkout } />
          <Route
            exact path="/details/:id/category/:category"
            render={ (props) => <ProductDetail { ...props } /> }
          />
          <Route component={ () => <h1>Página não existe</h1> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
