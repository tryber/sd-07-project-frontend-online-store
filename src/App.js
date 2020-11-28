import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD
=======
import ShoppingCart from './pages/ShoppingCard';
>>>>>>> defee5958a5b15999adbc9c0e23ddcbea71e8bbe
import './App.css';
import ShoppingCart from './pages/ShoppingCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
=======
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />
>>>>>>> defee5958a5b15999adbc9c0e23ddcbea71e8bbe
      </Switch>
    </BrowserRouter>
  );
}
export default App;
