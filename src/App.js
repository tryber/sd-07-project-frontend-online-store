import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Home from './components/Home';
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
