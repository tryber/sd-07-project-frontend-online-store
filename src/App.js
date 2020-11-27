import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import shoppingCart from './pages/shoppingCart';
import home from './pages/home';
import './App.css';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/shoppingCart" component={shoppingCart} />
          <Route exact path="/product/:category_id/:id" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
