import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart'

function App() {

  return (
    <Router>
      <Link to="/">Search Bar</Link>
      <Link to="/cart">Cart</Link>
      <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route exact="/cart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
