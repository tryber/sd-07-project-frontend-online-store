import React from 'react';
import './App.css';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <ProductList />
      <CategoryList />
    </div>
  );
}

export default App;
