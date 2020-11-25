import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import NotFound from './pages/NotFoud';
import ShoppingCart from './pages/ShoppingCart';
// Comentário 2
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
