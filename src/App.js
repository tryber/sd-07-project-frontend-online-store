import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoriesList from './pages/CategoriesList';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={CategoriesList} />
        <Switch>
          <Route exact path="/product/:id" component={ProductDetail} />          
          <Route exact path="/" component={ CategoriesList } />
          <Route exact path="/shoopingcart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
