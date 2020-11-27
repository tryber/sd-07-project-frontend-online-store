import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import NotFound from './pages/NotFoud';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Payment from './pages/Payment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route
            exact
            path="/product-details/:id/:category"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route component={ NotFound } />
          <Route exact path="/payment" component={ Payment } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
