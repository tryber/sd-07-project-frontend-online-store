import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './components/ShoppingCart'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact="/cart" component={ShoppingCart} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
