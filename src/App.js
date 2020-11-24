import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ProductList} />
    </BrowserRouter>
  );
}

export default App;
