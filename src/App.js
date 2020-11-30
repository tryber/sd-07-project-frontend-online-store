import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as page from './pages';
import GlobalStyle from './style/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={page.Home} />
        <Route path="/shopcart" component={page.ShopCart} />
        <Route path="/details/" component={page.ProductDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
