import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route exact="/cart" component={ShoppingCart} />
        </Switch>
      </Router>
      <Home />
    </div>
  )
}

export default App;
