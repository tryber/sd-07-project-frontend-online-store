import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  api.getCategories().then(categories => { console.log(categories) })
  api.getProductsFromCategoryAndQuery().then(categories => { console.log(categories) })
  return (
    <div className="App">
      Eu ainda odeio React
    </div>
  );
}

export default App;