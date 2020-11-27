import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingCartPage" component={ ShoppingCartPage } />
          <Route exact path="/ShoppingCartPage/Details" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
