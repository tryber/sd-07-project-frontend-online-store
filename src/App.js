import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ ShoppingCart } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
