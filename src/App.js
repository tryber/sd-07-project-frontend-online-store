import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Category from './pages/Category';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Main } />
      <Route exact path="/cart" component={ Cart } />
      <Route exact path="/categoria" component={ Category } />
    </BrowserRouter>
  );
}

export default App;
