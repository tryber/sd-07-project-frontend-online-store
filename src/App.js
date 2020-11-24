import React from 'react';
import * as api from './services/api';
import './App.css';

api.getCategories().then((categories) => { console.log(categories) });
api.getProductsFromCategoryAndQuery().then((categories) => { console.log(categories) });

function App() {
  return (
    // <div className="App">

    // </div>
  );
}

export default App;
