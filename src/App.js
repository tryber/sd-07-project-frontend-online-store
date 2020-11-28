import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import './App.css';
import ShoppingCart from './pages/ShoppingCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
        <Route
          exact path="/details/:id"
          component={(props) => <Details {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
