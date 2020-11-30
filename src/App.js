import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from './Home';
import Cart from './pages/cart';
import ProductPage from './pages/productpage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsList } />
        <Route exact path="/pages/cart" component={ Cart } />
        <Route 
          exact
          path="/pages/productpage/:Id"
          render={ (props) => <ProductPage { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
