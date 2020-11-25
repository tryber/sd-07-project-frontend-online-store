import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import ShoppingCartList from './ShoppingCartList';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/shoppingcart" component={ ShoppingCartList } />
        <Route exact path="/" component={ ProductList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
