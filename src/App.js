import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CategoriesList from './pages/CategoriesList';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={CategoriesList} />
          <Route exact path="/product/:id" component={ProductDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
