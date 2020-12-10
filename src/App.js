import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from './Home';
import cart from './pages/cart';
import ProductPage from './pages/productpage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsList } />
        <Route exact path="/cart" component={ cart } />
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
