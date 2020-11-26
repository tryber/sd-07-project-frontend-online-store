import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import ShoppingCartPage from './Pages/ShoppingCartPage';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/product-details/:category_id/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route exact path="/shopping-cart" component={ ShoppingCartPage } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
