import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ProductList, Home } from './components';
import './App.css';

function App() {
  return (
    <div>
      <Home />
    <BrowserRouter>
      <Route exact path="/" component={ ProductList } />
    </BrowserRouter>
    </div>
  );
}

export default App;
