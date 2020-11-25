import React from 'react';
import './App.css';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CategoryList from './CategoryList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/ShoppingCart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
      <ProductList />
      <CategoryList />
    </div>
  );
}

export default App;
