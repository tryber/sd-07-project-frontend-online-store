import React from 'react';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/pages/ShoppingCart" component={ ShoppingCart } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
