import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductsDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
        <Route path="/product/:id/:categoryID" component={ ProductDetails } />
      </Switch>
    </Router>
  );
}

export default App;
