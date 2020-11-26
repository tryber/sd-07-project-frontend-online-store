import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from './Home';
import Cart from './pages/cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsList } />
        <Route exact path="/pages/cart" component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
