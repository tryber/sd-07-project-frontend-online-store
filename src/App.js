import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Categories from './components/Categories';

import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Categories />
      <Switch>
        <Route path="/" exact component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
