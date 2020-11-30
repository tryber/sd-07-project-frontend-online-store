import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as cp from './components';
import * as icon from './components/Icons';

import * as view from './views';
import * as page from './pages';
import * as api from './services/api';

import GlobalStyle from './style/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={page.Home} />
        <Route path="/shopcart" component={page.ShopCart} />
        <Route path="/details" component={page.ProductDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
