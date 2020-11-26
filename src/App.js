import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart'
// import './App.css';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ProductsList} />
          <Route exact path='/PageCard' component={ShoppingCart} />
          <Route
            exact
            path='/ProductDetail/:id'
            render={(props) => <ProductDetail {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
