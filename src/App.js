import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import ProductDetail from '../src/components/ProductDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/detais/:category_id" render={(props) => <ProductDetail {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
