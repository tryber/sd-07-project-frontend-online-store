import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/pages/shoppingcart" component={ ShoppingCart } />
        <Route
          exact
          path="/details/:id"
          render={ (props) => <ProductDetail { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
