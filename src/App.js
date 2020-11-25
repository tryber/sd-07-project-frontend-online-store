import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Categories from './components/Categories';

import Search from './components/Search';
import CartButton from './components/CartButton';
import CartEmptyMessage from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Categories />

      <Switch>
        <Route path="/" exact component={ Search } />
        <Route path="/Cart" exact component={ CartEmptyMessage } />
      </Switch>
      <CartButton />
    </BrowserRouter>
  );
}

export default App;
