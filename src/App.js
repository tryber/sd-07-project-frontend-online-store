import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Main } />
      <Route exact path="/cart" component={ Cart } />
      <Route exact path="/erro" component={ NotFound } />
      <Route exat path="/details/:id" component={ Details } />
    </BrowserRouter>
  );
}

export default App;
